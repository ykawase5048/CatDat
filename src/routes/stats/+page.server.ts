import { batch } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import sql from 'sql-template-tag'

export const prerender = false

const COUNTRY_COUNT_THRESHOLD = 10

export const load = async () => {
	const { results, err } = await batch<
		[
			{
				start: string
				total: number
				total_last_day: number
				total_last_week: number
				total_last_month: number
			},
			{ day: string; count: number },
			{ country: string; count: number },
			{ theme: string; count: number },
			{ device_type: string; count: number },
		]
	>([
		sql`
			SELECT
				COALESCE(MIN(created_at), '') AS start,
				COUNT(*) AS total,
				COUNT(CASE WHEN created_at >= datetime('now', '-1 day') THEN 1 END) AS total_last_day,
				COUNT(CASE WHEN created_at >= datetime('now', '-7 days') THEN 1 END) AS total_last_week,
				COUNT(CASE WHEN created_at >= datetime('now', '-1 month') THEN 1 END) AS total_last_month
			FROM visits;
        `,
		sql`
			SELECT
    			date(created_at) AS day,
    			COUNT(*) AS count
			FROM visits
			GROUP BY day
			ORDER BY day;
		`,
		sql`
            SELECT
                country,
                COUNT(*) as count
            FROM visits
            GROUP BY country
            ORDER BY count DESC;
        `,
		sql`
            SELECT
                theme,
                COUNT(*) as count
            FROM visits
            GROUP BY theme
            ORDER BY theme;
        `,
		sql`
            SELECT
                device_type,
                COUNT(*) as count
            FROM visits
            GROUP BY device_type
            ORDER BY count DESC;
        `,
	])

	if (err) error(500, 'Failed to load data')

	const [
		[{ total, start, total_last_day, total_last_week, total_last_month }],
		daily_visits,
		detailed_country_stats,
		theme_stats,
		device_stats,
	] = results

	const country_stats: typeof detailed_country_stats = []
	let other_count = 0

	for (const { country, count } of detailed_country_stats) {
		if (count <= COUNTRY_COUNT_THRESHOLD) other_count += count
		else country_stats.push({ country, count })
	}

	country_stats.push({ country: 'Others', count: other_count })

	return {
		start,
		total,
		total_last_day,
		total_last_week,
		total_last_month,
		daily_visits,
		country_stats,
		theme_stats,
		device_stats,
	}
}
