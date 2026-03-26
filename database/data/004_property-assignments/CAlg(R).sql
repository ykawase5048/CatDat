INSERT INTO category_property_assignments (
	category_id,
	property_id,
	is_satisfied,
	reason
)
VALUES
(
	'CAlg(R)',
	'locally small',
	TRUE,
	'There is a forgetful functor $\mathbf{CAlg(R)} \to \mathbf{Set}$ and $\mathbf{Set}$ is locally small.'
),
(
	'CAlg(R)',
	'finitary algebraic',
	TRUE,
	'Take the algebraic theory of a commutative ring.'
),
(
	'CAlg(R)',
	'strict terminal object',
	TRUE,
	'If $f : 0 \to R$ is a homomorphism, then $R$ satisfies $1=f(1)=f(0)=0$, so that $R=0$.'
),
(
	'CAlg(R)',
	'Malcev',
	TRUE,
	'This follows in the same way as for groups, see also Example 2.2.5 in <a href="https://ncatlab.org/nlab/show/Malcev,+protomodular,+homological+and+semi-abelian+categories" target="_blank">Malcev, protomodular, homological and semi-abelian categories</a>.'
),
(
	'CAlg(R)',
	'coextensive',
	TRUE,
	'One can use the same proof as for $\mathbf{CRing}$.'
),
(
	'CAlg(R)',
	'strict initial object',
	FALSE,
	'The homomorphism $p_1 : R \times R \to R$ is not an isomorphism, and $R$ is initial.'
),
(
	'CAlg(R)',
	'balanced',
	FALSE,
	'Take a prime ideal $P \subseteq R$ and consider the commutative $R$-algebra $A := R/P$ (which is an integral domain). Then the inclusion $A \hookrightarrow Q(A)$ is a counterexample.'
),
(
	'CAlg(R)',
	'cogenerator',
	FALSE,
	'Assume that there is a commutative $R$-algebra $Q$ that cogenerates. Clearly, $Q$ is non-zero. Take an infinite field $F$ which admits an $R$-algebra structure, is larger than $Q$ and admits a non-trivial automorphism (for example, a field of rational functions over some residue field of $R$). Then there is no homomorphism $F \to Q$. Since $Q$ cogenerates, this implies that all homomorphisms $F \to F$ are equal, a contradiction.'
),
(
	'CAlg(R)',
	'skeletal',
	FALSE,
	'trivial'
),
(
	'CAlg(R)',
	'infinitary codistributive',
	FALSE,
	'The canonical homomorphism $A \otimes_R R^{\mathbb{N}} \to A^{\mathbb{N}}$ is given by $a \otimes (r_n)_n \mapsto (r_n a)_n$ and does not have to be surjective: Since $R \neq 0$, there is a commutative $R$-algebra $K$ which is a field. Now take $A := K[X]$ and consider the sequence $(X^n)_{n} \in A^{\mathbb{N}}$.'
),
(
	'CAlg(R)',
	'strongly connected',
	FALSE,
	'Choose a maximal ideal $\mathfrak{m}$ of $R$, so $K := R/\mathfrak{m}$ is a field. If $\mathbf{CAlg}(R)$ is strongly connected, then also $\mathbf{CAlg}(K)$ is strongly connected. This has been disproven in <a href="https://math.stackexchange.com/questions/5129689" target="_blank">MSE/5129689</a>.'
),
(
	'CAlg(R)',
	'coregular',
	FALSE,
	'See <a href="https://math.stackexchange.com/questions/3745302" target="_blank">MSE/3745302</a>.'
);
