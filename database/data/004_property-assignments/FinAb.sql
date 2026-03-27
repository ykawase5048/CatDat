INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'FinAb',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{FinAb} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'FinAb',
	'essentially small',
	TRUE,
	'The underlying set of a finite structure can be chosen to be a subset of $\mathbb{N}$.'
),
(
	'FinAb',
	'abelian',
	TRUE,
	'This follows from the fact for abelian groups.'
),
(
	'FinAb',
	'self-dual',
	TRUE,
	'This is a simple special case of Pontryagin duality: The functor $\hom(-,\mathbb{Q}/\mathbb{Z})$ provides the equivalence.'
),
(
	'FinAb',
	'small',
	FALSE,
	'Even the collection of trivial groups is not small.'
),
(
	'FinAb',
	'generator',
	FALSE,
	'If $A,B$ are finite abelian groups whose orders are coprime, then we know that $\hom(A,B)$ is trivial. But a generator would admit a non-trivial homomorphism to any other non-trivial finite abelian group.'
),
(
	'FinAb',
	'split abelian',
	FALSE,
	'The sequence $0 \to \mathbb{Z}/2 \to \mathbb{Z}/4 \to \mathbb{Z}/2 \to 0$ does not split.'
),
(
	'FinAb',
	'countable products',
	FALSE,
	'Assume that the product $P := \mathbb{Z}/2 \times \mathbb{Z}/2 \times \cdots$ exists. Since products are associative, we conclude $P \cong \mathbb{Z}/2 \times P$. By induction, we get $P \cong (\mathbb{Z}/2)^n \times P$ for all $n$. But then $P$ has at least $2^n$ elements, which contradicts finiteness of $P$.'
),
(
	'FinAb',
	'skeletal',
	FALSE,
	'There are many trivial and hence isomorphic groups which are not equal.'
);
