<script lang="ts">
	import FunctorList from '$components/FunctorList.svelte'
	import MetaData from '$components/MetaData.svelte'
	import { pluralize } from '$lib/client/utils'

	let { data } = $props()
</script>

<MetaData title="List of functors" description="All available functors" />

<section>
	<h2>List of functors</h2>

	<FunctorList
		functors={data.functors}
		description={pluralize(data.functors.length, {
			one: 'Found {count} functor',
			other: 'Found {count} functors',
		})}
	/>
</section>
