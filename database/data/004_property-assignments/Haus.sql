INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Haus',
	'locally small',
	TRUE,
	'It is a full subcategory of $\mathbf{Top}$, which is locally small.'
),
(
    'Haus',
    'equalizers',
    TRUE,
    'This follows from the corresponding fact for $\mathbf{Top}$ since subspaces of Hausdorff spaces are again Hausdorff.'
),
(
    'Haus',
    'products',
    TRUE,
    'This follows from the corresponding fact for $\mathbf{Top}$ since products of Hausdorff spaces are again Hausdorff.'
),
(
    'Haus',
    'cocomplete',
    TRUE,
    'This follows since $\mathbf{Haus}$ is a reflective subcategory of $\mathbf{Top}$, which is cocomplete. For the reflector, see e.g. the <a href="https://ncatlab.org/nlab/show/Hausdorff+space#HausdorffReflection" target="_blank">nLab</a>. Explicitly, we construct the colimit of Hausdorff spaces by applying the reflector to the colimit of the underlying topological spaces.'
),
(
    'Haus',
    'infinitary extensive',
    TRUE,
    'This follows exactly as for $\mathbf{Top}$ since Hausdorff spaces are closed under taking subspaces and coproducts in $\mathbf{Top}$.'
),
(
	'Haus',
	'well-powered',
	TRUE,
	'This is clear from the classification of monomorphisms as injective continuous maps.'
),
(
	'Haus',
	'well-copowered',
	TRUE,
	'This is clear from the classification of epimorphisms as continuous maps with dense image.' -- FIXME, needs extra explanation
),
(
	'Haus',
	'generator',
	TRUE,
	'The one-point space is a generator since it represents the forgetful functor $\mathbf{Haus} \to \mathbf{Set}$.'
),
(
	'Haus',
	'strongly connected',
	TRUE,
	'Every nonempty Hausdorff space is weakly terminal (by using constant maps).'
),
(
    'Haus',
    'co-Malcev',
    TRUE,
    'See <a href="https://mathoverflow.net/a/509582/2841" target="_blank">MO/509548</a>.'
),
(
	'Haus',
	'cartesian closed',
	FALSE,
	NULL
),
(
	'Haus',
	'strict terminal object',
	FALSE,
	'This is trivial.'
),
(
	'Haus',
	'balanced',
	FALSE,
	'The inclusion $\mathbb{Q} \hookrightarrow \mathbb{R}$ is a counterexample; it is an epimorphism since $\mathbb{Q}$ is dense in $\mathbb{R}$.'
),
(
	'Haus',
	'skeletal',
	FALSE,
	'This is trivial.'
),
(
	'Haus',
	'Malcev',
	FALSE,
	'This is clear since $\mathbf{Set}$ is not Malcev and can be interpreted as the subcategory of discrete spaces (which are Hausdorff).'
);
