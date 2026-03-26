INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'Ban',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{Ban} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.' 
),
(
	'Ban',
	'pointed',
	TRUE,
	'The trivial Banach space $\{0\}$ is a zero object.'
),
(
	'Ban',
	'locally ℵ₁-presentable',
	TRUE,
	'Example 1.48 in <a href="https://ncatlab.org/nlab/show/Locally+Presentable+and+Accessible+Categories" target="_blank">Adamek-Rosicky</a>.'
),
(
	'Ban',
	'disjoint coproducts',
	TRUE,
	'This follows from the corresponding fact for vector spaces, since the coproduct is built from the direct sum of vector spaces (using the $1$-norm).'
),
(
	'Ban',
	'cogenerator',
	TRUE,
	'Hahn-Banach shows that $\mathbb{C}$ is a cogenerator'
),
(
	'Ban',
	'disjoint finite products',
	TRUE,
	'The proof works exactly as in the case of pointed finitary algebraic categories: If $A,B$ are Banach spaces, to show that $A \sqcup_{A \times B} B$ is trivial, let $R$ be a Banach space which admits linear maps $f : A \to R$, $g : B \to R$ such that $f(p_1(a,b)) = g(p_2(a,b))$ for all $(a,b) \times A \times B$. This means $f(a) = g(b)$. In particular, $f(a) = g(0) = 0$. Likewise, $g(b) = 0$, and we are done.'
),
(
	'Ban',
	'biproducts',
	FALSE,
	'If $\sqcup$ denotes the coproduct, the canonical morphism $\mathbb{C} \sqcup \mathbb{C} \to \mathbb{C} \times \mathbb{C}$ is bijective, but not an isomorphism in this category since the coproduct carries the $1$-norm, while the product carries the $\sup$-norm.'
),
(
	'Ban',
	'balanced',
	FALSE,
	NULL
),
(
	'Ban',
	'exact filtered colimits',
	FALSE,
	NULL
),
(
	'Ban',
	'skeletal',
	FALSE,
	'trivial'
),
(
	'Ban',
	'unital',
	FALSE,
	'See <a href="https://math.stackexchange.com/questions/5033161" target="_blank">MSE/5033161</a>.'
);
