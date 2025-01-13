<script lang="ts">
	const { data } = $props()
	const { category, formula } = data
</script>

<a href="/">Home</a>

<h2>{category.name}</h2>

<p><strong>notation:</strong> {@html formula}</p>

<p>
	<strong>objects:</strong>
	{category.objects}
</p>

<p>
	<strong>morphisms:</strong>
	{category.morphisms}
</p>

{#if category.nlab_link}
	<p>
		<a href={category.nlab_link}>nLab Link</a>
	</p>
{/if}

{#if category.description}
	<p>{category.description}</p>
{/if}

<h3>Satisfied Properties</h3>

<ul>
	{#each category.properties as property}
		<li>
			{property.prefix}
			<a href="/property/{property.id}">
				{property.name}
			</a>
		</li>
	{/each}
</ul>

<h3>Missing Properties</h3>

<ul>
	{#each category.non_properties as property}
		<li>
			{property.prefix}
			<a href="/property/{property.id}">
				{property.name}
			</a>
		</li>
	{/each}
</ul>
