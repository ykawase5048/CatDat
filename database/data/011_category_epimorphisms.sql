DELETE FROM category_epimorphisms;

INSERT INTO category_epimorphisms (
	category_id, -- ID of the category
	description, -- description of its epimorphisms
	reason		 -- proof or reference for this description (required)
)
VALUES
	(
		'0',
		'none',
		'trivial'
	),
	(
		'1',
		'every morphism',
		'it is discrete'
	),
	(
		'2',
		'every morphism',
		'it is discrete'
	),
	(
		'Set',
		'surjective maps',
		'For the non-trivial direction, if $f : X \to Y$ is an epimorphism of sets, then in particular $f^* : \hom(Y,2) \to \hom(X,2)$ is injective, which identifies with $f^* : P(Y) \to P(X)$. Then for all $y \in Y$ we have $f^*(\{y\}) \neq f^*(\emptyset) = \emptyset$, so that $y$ has a preimage.'
	),
	(
		'Ab',
		'surjective homomorphisms',
		'For the non-trivial direction, if $f : A \to B$ is an epimorphism, then $p \circ f = 0$ for the projection  $p : B \to B/f(A)$ implies that $p = 0$, so that $B = f(A)$.'
	),
	(
		'Top',
		'surjective continuous maps',
		'The proof works exactly as for the category of sets, where we endow $2$ with the indiscrete topology.'
	),
	(
		'Grp',
		'surjective homomorphisms',
		'For the non-trivial direction, if $f : G \to H$ is an epimorphism, we may factor it as $G \to f(G) \to H$, and $f(G) \to H$ is still an epimorphism, but also an inclusion and hence a monomorphism. Since we already know that the category is balanced, $f(G) \to H$ must be an isomorphism.'
	),
	(
		'Vect',
		'surjective linear maps',
		'The forgetful functor to abelian groups is faithful and preserves colimits, hence reflects and preserves epimorphisms. Alternatively, just use the same proof as for abelian groups.'
	),
	(
		'FinSet',
		'surjective maps',
		'Use the same proof as for sets.'
	),
	(
		'FinAb',
		'surjective homomorphisms',
		'Use the same proof as for abelian groups.'
	),
	(
		'Abfg',
		'surjective homomorphisms',
		'Use the same proof as for abelian groups.'
	),
	(
		'Set*',
		'surjective pointed maps',
		'If $f : X \to Y$ is an epimorphism of pointed sets, then the inclusion $i : f(X) \hookrightarrow Y$ is an epimorphism as well. But it is also a split monomorphism (we may map everything in $Y \setminus f(X)$ to the base point of $f(X)$, and do not touch the rest), hence an isomorphism.'
	),
	(
		'sSet',
		'pointwise surjective transformations',
		'This holds in every functor category $[\mathcal{C},\mathbf{Set}]$.'
	),
	(
		'Pos',
		'surjective order-preserving functions',
		'Use the same proof as for sets, where $2 = \{0,1\}$ is endowed with the trivial order in which $0$, $1$ have no relation.'
	),
	(
		'walking_morphism',
		'every morphism',
		'It is a thin category.'
	),
	(
		'M-Set',
		'surjective $M$-maps',
		'This holds in every functor category $[\mathcal{C},\mathbf{Set}]$, here applied to the case that $\mathcal{C}$ has just one object.'
	),
	(
		'R-Mod',
		'surjective $R$-linear maps',
		'The forgetful functor to abelian groups is faithful and preserves colimits, hence reflects and preserves epimorphisms. Alternatively, use the same proof as for abelian groups.'
	),
	(
		'Ban',
		'linear contractions with dense image',
		'Let $f : X \to Y$ be an epimorphism of Banach spaces. The subspace $U := \overline{f(X)} \subseteq Y$ is closed. It is well-known that the quotient $Y/U$ is also a Banach space with a projection $p : Y \to Y/U$. Since $p \circ f = 0 = 0 \circ f$, we infer $p = 0$, so that $U = Y$.'
	),
	(
		'Meas',
		'surjective measurable maps',
		'Use the same proof as for sets, where $2 = \{0,1\}$ is endowed with the trivial $\sigma$-algebra.'
	),
	(
		'N',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Cat',
		'A functor $F : \mathcal{C} \to \mathcal{D}$ is an epimorphism iff $F$ is surjective on objects and for every morphism $s$ in $\mathcal{D}$ there is a zigzag over $U := F(\mathcal{C})$, meaning morphisms $u_1,\dotsc,u_{m+1} \in U$, $v_1,\dotsc,v_m \in U$, $x_1,\dotsc,x_m \in \mathcal{D}$ and $y_1,\dotsc,y_m \in \mathcal{D}$ such that $s = x_1 u_1$, $u_1 = v_1 y_1$, $x_{i-1} v_{i-1} = x_i u_i$, $u_i y_{i-1} = v_i y_i$, $x_m v_m = u_{m+1}$ and $u_{m+1} y_m = s$.',
		'This is an extension of the <a href="https://en.wikipedia.org/wiki/Isbell''s_zigzag_theorem" target="_blank">corresponding theorem for monoids</a> and proven in <a href="https://www.jstor.org/stable/2373286" target="_blank">Epimorphisms and Dominions, III</a> by John R. Isbell.'
	),
	(
		'On',
		'every morphism',
		'It is a thin category.'
	),
	(
		'CRing',
		'A ring map $f : R \to S$ is an epimorphism iff $S$ equals the <i>dominion</i> of $f(R) \subseteq S$, meaning that for every $s \in S$ there is some matrix factorization $(s) = Y X Z$ with $X \in M_{n \times n}(R)$, $Y \in M_{1 \times n}(S)$, and $Z \in M_{n \times 1}(S)$.',
		'See <a href="https://stacks.math.columbia.edu/tag/04VM" target="_blank">Stacks Project</a> ,or, for many more results, the seminar <a href="https://www.numdam.org/issues/SAC_1967-1968__2_/">Les épimorphismes d''anneaux</a>. See also <a href="https://mathoverflow.net/questions/109/" target="_blank">MO/109</a> for some results.'
	),
	(
		'Mon',
		'A monoid map $f : T \to S$ is an epimorphism iff $S$ equals the <i>dominion</i> of $U := f(T) \subseteq S$, meaning that for every $s \in S$ there are $u_1,\dotsc,u_{m+1} \in U$, $v_1,\dotsc,v_m \in U$, $x_1,\dotsc,x_m \in S$ and $y_1,\dotsc,y_m \in S$ such that $s = x_1 u_1$, $u_1 = v_1 y_1$, $x_{i-1} v_{i-1} = x_i u_i$, $u_i y_{i-1} = v_i y_i$, $x_m v_m = u_{m+1}$ and $u_{m+1} y_m = s$.',
		'This is <a href="https://en.wikipedia.org/wiki/Isbell''s_zigzag_theorem" target="_blank">Isbell''s zigzag Theorem</a>, see references there.'
	),
	(
		'Fld',
		'purely inseparable homomorphisms',
		'See <a href="https://math.stackexchange.com/questions/687869" target="_blank">MSE/687869</a>.'
	),
	(
		'FreeAb',
		'homomorphisms $f : A \to B$ with the property that $f(A)$ is not contained in a proper direct summand of $B$.',
		'Let $f : A \to B$ be a morphism of free abelian groups such that $f(A)$ is not contained in a proper direct summand of $B$. Then $f$ is an epimorphism: If $t : B \to C$ is a morphism with $t \circ f = 0$, we want to show $t = 0$. Since the image of $t$ is free abelian (as a subgroup of $B$), we may assume that $t$ is surjective. Since $C$ is free, $t$ splits, so its kernel $K$ is a direct summand of $B$ (Splitting Lemma). It contains $f(A)$ because of $t \circ f = 0$. By assumption, $K = B$, so that $t = 0$. Conversely, assume that $f : A \to B$ is an epimorphism, and that $f(A)$ is contained in a direct summand $K$ of $B$. Let $L$ be a complement of $B$ (which is free abelian) and let $p : B \to L$ be the projection. Then $t \circ f = 0$, so $t = 0$. But then $L = 0$, which means $K = B$.'
	),
	(
		'Z',
		'objectwise surjective natural transformations',
		'This holds in every functor category $[\mathcal{C},\mathbf{Set}]$, here applied to the case that $\mathcal{C}$ has just one object.'
	),
	(
		'BG',
		'every morphism',
		'it is a groupoid'
	),
	(
		'BGf',
		'every morphism',
		'it is a groupoid'
	),
	(
		'BN',
		'every morphism',
		'Addition of natural numbers is cancellative.'
	),
	(
		'walking_pair',
		'every morphism',
		'Each $0 \to 1$ is an epimorphism since the only morphism starting at $1$ is the identity.'
	),
	(
		'walking_isomorphism',
		'every morphism',
		'it is a groupoid'
	),
	(
		'Setne',
		'surjective maps',
		'For the non-trivial direction, let $f : X \to Y$ be an epimorphism of non-empty sets. Then the inclusion $f(X) \hookrightarrow Y$ is an epimorphism as well, but also a split monomorphism (we can just map everything in $Y \setminus f(X)$ to a fixed element of $f(X)$). As such, it must be an isomorphism.'
	),
	(
		'B',
		'every morphism',
		'trivial'
	),
	(
		'FI',
		'bijective maps',
		'Take an epimorphism $X \to Y$ in this category, w.l.o.g. the inclusion of a subset $X \subseteq Y$. This means that for two injective maps $f,g : Y \to T$ with $f|_X = g|_X$ we must have $f = g$. Let $T := Y + (Y \setminus X)$ (disjoint union), $f$ be the inclusion into the first summand, $g|_X$ be the inclusion into the first summand, and $g|_{Y \setminus X}$ be the inclusion into the second summand. Then $f$ and $g$ are injective with $f|_X = g|_X$, so that $f = g$. But this means $X = Y$.'
	),
	(
		'FS',
		'every morphism',
		'trivial'
	),
	(
		'BOn',
		'finite ordinal numbers',
		'See <a href="https://math.stackexchange.com/questions/5029605" target="_blank">MO/5029605</a>.'
	),
	(
		'FinOrd',
		'surjective order-preserving maps',
		'The proof is similar to the one for $\mathbf{Set}$: If $f : X \to Y$ is an epimorphism of (finite) orders, in particular for all morphismus $g,h : Y \to \{0 < 1\}$ with $g \circ f = h \circ f$ we have $g = h$. This means for all upper sets $A,B \subseteq Y$ with $f^*(A) = f^*(B)$ we have $A = B$. If $y \in Y$, apply this to the intervals $A = Y_{\geq y}$ and $B = Y_{> y}$, which are different. Hence, there is some $x \in f^*(A) \setminus f^*(B)$, which means $f(x) \geq y$ but not $f(x) > y$, so that $f(x) = y$.'
	),
	(
		'Rel',
		'A relation $R : A \to B$ is an epimorphism iff the map $R^* : P(B) \to P(A)$ defined by $S \mapsto \{a \in A : \exists \, b \in S: (a,b) \in R \}$ is injective.',
		'See <a href="https://math.stackexchange.com/questions/350716/" target="_blank">MSE/350716</a>.'
	),
	(
		'Sp',
		'pointwise surjective natural transformations',
		'This holds in every functor category $[\mathcal{C},\mathbf{Set}]$.'
	),
	(
		'real_interval',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Zdiv',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Noo',
		'every morphism',
		'It is a thin category.'
	);