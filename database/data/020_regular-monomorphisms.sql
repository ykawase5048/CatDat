INSERT INTO special_morphisms (
	category_id,
	type,
	description,
	reason
)
VALUES
(
    '0',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    '1',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    '2',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Ab',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular.'
),
(
    'Abfg',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'B',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'BG',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'BGf',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'BN',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
),
(
    'BOn',
    'regular monomorphisms',
    'ordinals of the form $\alpha \cdot \omega$, where $\alpha$ is any ordinal',
    'This results from the proof that equalizers exist, see <a href="https://math.stackexchange.com/questions/5029668" target="_blank">MSE/5029668</a>.'
),
(
    'Ban',
    'regular monomorphisms',
    'closed embeddings',
    'The non-trivial direction follows from the <a href="https://math.stackexchange.com/questions/319867" target="_blank">well-known fact</a> that for every closed subspace of a Banach space its quotient space is again a Banach space.'
),
(
    'FI',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'FS',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'FinAb',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'FinOrd',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'FinSet',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Grp',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'M-Set',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Met_c',
    'regular monomorphisms',
    'embeddings of closed subspaces',
    'A reference is Example 7.58 (3) in <a href="https://ncatlab.org/nlab/show/Abstract+and+Concrete+Categories" target="_blank">Joy of Cats</a>, but a proof is missing there.'
),
(
    'N',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
),
(
    'Noo',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
),
(
    'On',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
),
(
    'Pos',
    'regular monomorphisms',
    'embeddings',
    'Every regular monomorphism is an embedding by the explicit construction of equalizers. For the converse, let $i : P \to Q$ be an embedding, which we may assume the be an inclusion. Consider the cokernel pair $C := Q \cup_P Q$. It exists because the category has pushouts, but we can (and need to) describe it more concretely: As a set, $C$ is a disjoint union of $P$ and two copies of $Q \setminus P$. The elements will be denoted by $p,q_1,q_2$. The $i$th inclusion map $Q \to C$ maps $p \in P$ to itself and $q \in Q \setminus P$ to $q_i$. The ordering is directly induced by $Q$: We have $p \leq p''$ in $C$ iff $p \leq p''$ in $P$, we have $p \leq q_i$ iff $p \leq q$ in $Q$, etc. One verifies that this indeed defines a partial order, and by construction the two maps $Q \to C$ are order-preserving and have equalizer $P$.'
),
(
    'R-Mod',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'R-Mod_div',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Set',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Set*',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Setne',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Sh(X)',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Sh(X,Ab)',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Sp',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Top',
    'regular monomorphisms',
    'embeddings',
    'Equalizers are embeddings by their construction. Conversely, if $f : X \to Y$ is an embedding, then $f$ is the equalizer of the two characteristic maps $\chi_Y, \chi_{f(X)} : Y \to \{0,1\}$, where $\{0,1\}$ carries the indiscrete topology.'
),
(
    'Vect',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Z',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'Zdiv',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
),
(
    'real_interval',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
),
(
    'sSet',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'walking_composable_pair',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
),
(
    'walking_isomorphism',
    'regular monomorphisms',
    'same as monomorphisms',
    'This is because the category is mono-regular'
),
(
    'walking_morphism',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
),
(
    'walking_pair',
    'regular monomorphisms',
    'same as isomorphisms',
    'This is because the category is right cancellative.'
);