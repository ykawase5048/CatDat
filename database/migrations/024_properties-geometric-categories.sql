INSERT INTO category_properties (
	category_id,
	property_id,
	reason
)
VALUES
	(
		'sSet',
		'locally small',
		'This follows from the general fact that $[\mathcal{C},\mathcal{D}]$ is locally small when $\mathcal{C}$ is small and $\mathcal{D}$ is locally small, here applied to $\mathcal{C} = \Delta^{\mathrm{op}}$ and $\mathcal{D} = \mathbf{Set}$.'
	),
	(
		'sSet',
		'Grothendieck topos',
		'obvious'
	),
	(
		'sSet',
		'locally finitely presentable',
		'This follows from the fact that the free cocompletion of a small category is locally finitely presentable.'
	),
	(
		'Met',
		'locally small',
		'There is a forgetful functor $\mathbf{Met} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Met',
		'well-powered',
		'This follows since monomorphisms are injective.'
	),
	(
		'Met',
		'equalizers',
		'Just restrict the metric to the equalizer built from the sets.'
	),
	(
		'Met',
		'binary products',
		'The product of two metric spaces $(X,d)$, $(Y,d)$ is $(X \times Y,d)$ with $d((x_1,y_1),(x_2,x_2)) := \sup(d(x_1,x_2),d(y_1,y_2))$.' 
	),
	(
		'Met',
		'terminal object',
		'The one-point metric space is terminal.'
	),
	(
		'Met',
		'coequalizers',
		NULL
	),
	(
		'Met',
		'filtered colimits',
		'Given a filtered diagram $(X_i)$ of metric spaces, take the filtered colimit $X$ of the underlying sets with the following metric: If $x,y \in X$, let $d(x,y)$ be infimum of all $d(x_i,y_i)$, where $x_i,y_i \in X_i$ are some preimages of $x,y$ in some $X_i$. This is only a pseudo-metric, so finally take the associated metric space (Kolmogorov quotient). The definition ensures that each $X_i \to X$ is non-expansive, and the universal property is easy to check.' 
	),
	(
		'Met',
		'strict initial object',
		'This is because the initial object is the empty metric space.'
	),
	(
		'Met',
		'generator',
		'The one-point metric space is a generator since it represents the forgetful functor $\mathbf{Met} \to \mathbf{Set}$.'
	),
	(
		'Met',
		'cogenerator',
		'We claim that $\mathbb{R}$ with the usual metric is a cogenerator. Let $a,b \in X$ be two points of a metric space such that $f(a)=f(b)$ for all non-expansive maps $f : X \to \mathbb{R}$. This applies in particular to $f(x) := d(a,x)$ and shows that $0=d(a,a)=d(a,b)$, so that $a=b$.' 
	),
	(
		'Met_oo',
		'locally small',
		'There is a forgetful functor $\mathbf{Met}_{\infty} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Met_oo',
		'locally ℵ₁-presentable',
		'Example 4.5 in <a href="https://arxiv.org/abs/1504.02660" target="_blank">this preprint</a>'
	),
	(
		'Met_oo',
		'infinitary distributive',
		'This follows from the corresponding fact for topological spaces. Here, the coproduct metric takes value $\infty$ for points in distinct spaces.'
	),
	(
		'Met_oo',
		'cogenerator',
		'The proof is similar to $\mathbf{Met}$, a cogenerator is given by $\mathbb{R} \cup \{\infty\}$ with the metric in which $d(a,\infty)=\infty$ for $a \in \mathbb{R}$. Then one checks that the maps $d(a,-) : X \to \mathbb{R} \cup \{\infty\}$ are non-expansive and finishes as for $\mathbf{Met}$.'
	),
	(
		'Met_oo',
		'disjoint coproducts',
		'This easily follows from the corresponding fact for sets, since coproducts are built using disjoint unions.'
	),
	(
		'Met_c',
		'locally small',
		'There is a forgetful functor $\mathbf{Met}_c \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Met_c',
		'equalizers',
		'Just restrict the metric to the equalizer built from the sets.'
	),
	(
		'Met_c',
		'disjoint coproducts',
		'This easily follows from the corresponding fact for sets, since coproducts are built using disjoint unions.'
	),
	(
		'Met_c',
		'well-powered',
		'follows easily from the fact that monomorphisms here are injective'
	),
	(
		'Met_c',
		'generator',
		'The one-point metric space is a generator since it represents the forgetful functor $\mathbf{Met}_c \to \mathbf{Set}$.'
	),
	(
		'Met_c',
		'cogenerator',
		'The same proof as for $\mathbf{Met}$ shows that $\mathbb{R}$ with the usual metric is a cogenerator.'
	),
	(
		'Met_c',
		'infinitary distributive',
		'This follows from the corresponding fact for topological spaces.'
	),
	(
		'Met_c',
		'countable products',
		 'For finite products, we take the cartesian product with, say, the sup-metric. The prouct of countably many metric spaces $(X_i,d_i)_{i \geq 0}$ is given by the cartesian product $\prod_{i \geq 0} X_i$ with the metric $d(x,y) := \sum_{i \geq 0} d_i(x_i,y_i)/(1 + d_i(x_i,y_i))$. See Engelking''s book <i>General Topoloy</i>.'
	),

	(
		'Man',
		'locally small',
		'There is a forgetful functor $\mathbf{Man} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
	),
	(
		'Man',
		'well-powered',
		'follows from the fact that monomorphisms are injective here'
	),
	(
		'Man',
		'distributive',
		'This follows from the corresponding fact for topological spaces.'
	),
	(
		'Man',
		'generator',
		'The $0$-dimensional one-point manifold is a generator since it represents the forgetful functor $\mathbf{Top} \to \mathbf{Set}$.'
	),
	(
		'Man',
		'disjoint finite coproducts',
		'This follows from the corresponding fact for topological spaces.'
	),
	(
		'Man',
		'countable coproducts',
		'Take the usual disjoint union, which is clearly a smooth manifold, still second-countable. (Without that condition, all coproducts would exist.)'
	),
	(
		'Man',
		'Cauchy complete',
		'See Theorem 2.1 at the <a href="https://ncatlab.org/nlab/show/smooth+manifold" target="_blank">nLab</a>.'
	),

	(
		'LRS',
		'locally small',
		'For two ringed spaces $(X,O_X)$, (Y,O_Y)$, the collection of morphisms $X \to Y$ of ringed spaces is the collection $\prod_{f \in \hom(X,Y)} \hom(O_Y,f_* O_X)$, which is a set since $\hom(X,Y)$ is a set and each $\hom(O_Y,f_* O_X)$ is a set.'
	),
	(
		'LRS',
		'complete',
		'See <a href="https://arxiv.org/abs/1103.2139" target="_blank">Localization of ringed spaces</a> by W. Gillam. See also <a href="https://math.stackexchange.com/questions/1033675" target="_blank">MSE/1033675</a>.'
	),
	(
		'LRS',
		'cocomplete',
		'Demazure-Gabriel''s "Groupes algébriques", I. §1. 1.6'
	),
	(
		'LRS',
		'well-powered',
		NULL
	),
	(
		'LRS',
		'well-copowered',
		NULL
	),
	(
		'LRS',
		'infinitary distributive',
		'See <a href="https://math.stackexchange.com/questions/5036488/" target="_blank">MSE/5036488</a>.'
	),
	(
		'LRS',
		'disjoint coproducts',
		NULL
	),
	(
		'Sch',
		'locally small',
		'There is a forgetful functor $\mathbf{Sch} \to \mathbf{LRS}$ and $\mathbf{LRS}$ is locally small.'
	),
	(
		'Sch',
		'terminal object',
		'The scheme $\mathrm{Spec}(\mathbf{Z})$ is terminal.'
	),
	(
		'Sch',
		'pullbacks',
		'This is the well-known construction of the fiber product of schemes, see e.g. EGA I, Chap. I, Théorème 3.2.1.'
	),
	(
		'Sch',
		'well-powered',
		NULL
	),
	(
		'Sch',
		'infinitary distributive',
		'This follows from the corresponding fact for locally ringed spaces, see <a href="https://math.stackexchange.com/questions/5036488/" target="_blank">MSE/5036488</a>.'
	),
	(
		'Sch',
		'disjoint coproducts',
		NULL
	),
	(
		'Z',
		'complete',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'cocomplete',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'infinitary distributive',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'exact filtered colimits',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'disjoint coproducts',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'mono-regular',
		'follows immediately from the fact for $\mathbf{Set}$'
	),
	(
		'Z',
		'epi-regular',
		'follows immediately from the fact for $\mathbf{Set}$'
	);