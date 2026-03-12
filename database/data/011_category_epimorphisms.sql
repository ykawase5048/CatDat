DELETE FROM category_epimorphisms;

INSERT INTO category_epimorphisms (category_id, description, reason)
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
		''
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
		'The forgetful functor to abelian groups is faithful and preserves colimits, hence reflects and preserves epimorphisms. Alternatively, just use the same proof as for abelian groups.'
	),
	(
		'Ban',
		'linear contractions with dense image',
		''
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
		'are surjective on objects, but not necessarily on morphisms. Isbell''s zigzag theorem gives a precise characterization.',
		''
	),
	(
		'On',
		'every morphism',
		'It is a thin category.'
	),
	(
		'Fld',
		'purely inseparable homomorphisms',
		''
	),
	(
		'FreeAb',
		'homomorphisms $f : A \to B$ with the property that $f(A)$ is not contained in a proper direct summand of $B$.',
		''
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
		'it is a groupoid'
	),
	(
		'FI',
		'bijective maps',
		''
	),
	(
		'FS',
		'every morphism',
		''
	),
	(
		'BOn',
		'finite ordinal numbers',
		'See <a href="https://math.stackexchange.com/questions/5029605" target="_blank">MO/5029605</a>.'
	),
	(
		'FinOrd',
		'surjective order-preserving maps',
		''
	),
	(
		'Rel',
		'A relation $R : A \to B$ is an epimorphism iff the map $R^* : P(B) \to P(A)$ defined by $S \mapsto \{a \in A : \exists \, b \in S: (a,b) \in R \}$ is injective.',
		''
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