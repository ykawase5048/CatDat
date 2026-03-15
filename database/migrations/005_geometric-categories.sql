INSERT INTO CATEGORIES (
	id,
	name,
	notation,
	objects,
	morphisms,
	description,
	nlab_link
)  
VALUES  
    (
		'sSet',
		'category of simplicial sets',
		'$\mathbf{sSet}$',
		'simplicial sets, i.e. functors $\Delta^{\mathrm{op}} \to \mathbf{Set}$',
		'natural transformations',
		NULL,
		'https://ncatlab.org/nlab/show/SimpSet'
	),
	(
		'Met',
		'category of metric spaces with non-expansive maps',
		'$\mathbf{Met}$',
		'metric spaces',
		'non-expansive maps $f$, meaning $d(f(x),f(y)) \leq d(x,y)$ for all $x,y$',
		NULL,
		'https://ncatlab.org/nlab/show/Met'
	),
	(
		'Met_oo',
		'category of metric spaces with ∞ allowed',
		'$\mathbf{Met}_{\infty}$',
		'metric spaces, where the metric is allowed to assume the value $\infty$',
		'non-expansive maps $f$, meaning $d(f(x),f(y)) \leq d(x,y)$ for all $x,y$',
		'The fact that we allow $\infty$ means that universal constructions work much better.',
		'https://ncatlab.org/nlab/show/Met'
	),
	(
		'Met_c',
		'category of metric spaces with continuous maps',
		'$\mathbf{Met}_c$',
		'metric spaces',
		'continuous maps',
		'This category is equivalent to the subcategory of $\mathbf{Top}$ (or $\mathbf{Haus}$) that consists of metrizable topological spaces.',
		NULL
	),
	(
		'Man',
		'category of smooth manifolds',
		'$\mathbf{Man}$',
		'smooth manifolds',
		'smooth maps',
		'Here, a smooth manifold is assumed to be finite-dimensional, Hausdorff, and second-countable.',
		'https://ncatlab.org/nlab/show/Diff'
	),
	(
		'LRS',
		'category of locally ringed spaces',
		'$\mathbf{LRS}$',
		'locally ringed spaces',
		'morphisms of locally ringed spaces, thus consisting of a continuous map and a homomorphism of sheaves that induces local ring homomorphisms in the stalks',
		NULL,
		NULL
	),
	(
		'Sch',
		'category of schemes',
		'$\mathbf{Sch}$',
		'schemes',
		'morphism of locally ringed spaces',
		NULL,
		NULL
	),
	(
		'Z',
		'category of Z-functors',
		'$[\mathbf{CRing}, \mathbf{Set}]$',
		'Z-functors, i.e. functors from commutative rings to sets',
		'natural transformations',
		'This category is used in functorial algebraic geometry. It also provides a typical example of a functor category that is not locally small, but nevertheless relevant. Most of its properties are directly derived from the category of sets, so other functor categories $[\mathbf{C}, \mathbf{Set}]$ for large categories $\mathbf{C}$ will be similar.',
		NULL
	);