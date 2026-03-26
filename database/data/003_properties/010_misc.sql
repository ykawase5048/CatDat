INSERT INTO properties (
	id,
	prefix,
	description,
	nlab_link,
	dual_property_id,
	invariant_under_equivalences
)
VALUES
(
	'self-dual',
	'is',
	'A category is <i>self-dual</i> if it is equivalent to its opposite (or dual) category.',
	'https://ncatlab.org/nlab/show/opposite+category',
	'self-dual',
	TRUE
),
(
	'connected',
	'is',
	'A category is <i>connected</i> if it is inhabited and every two objects can be joined via a zig-zag path of morphisms. Equivalently, $\mathcal{C}$ is connected if $\mathcal{C} \simeq \coprod_{i \in I} \mathcal{C}_i$ implies $\mathcal{C}_i \simeq 0$ for some $i$.',
	'https://ncatlab.org/nlab/show/connected+category',
	'connected',
	TRUE
),
(
	'strongly connected',
	'is',
	'A category is <i>strongly connected</i> if it is inhabited and every two objects $A,B$ can be joined via a morphism: there is a morphism $A \to B$ or there is a morphism $B \to A$. Notice that this is stronger than being connected, and that posets with this property are precisely the inhabited totally ordered sets.',
	'https://ncatlab.org/nlab/show/strongly+connected+category',
	'strongly connected',
	TRUE
),
(
	'Malcev',
	'is',
	'A category is <i>Malcev</i> when it has finite limits and every internal reflexive relation is an internal equivalence relation. That is, if $R \subseteq X^2$ is a subobject with $\Delta_X \subseteq R$, then $R$ is symmetric and transitive.',
	'https://ncatlab.org/nlab/show/Malcev+category',
	'co-Malcev',
	TRUE
),
(
	'co-Malcev',
	'is',
	'A category is <i>co-Malcev</i> when its dual is Malcev, i.e., it has finite colimits and if $X \sqcup X \twoheadrightarrow R$ is a coreflexive corelation, then it is cosymmetric and cotransitive.<br>
	This terminology is not standard, but we have added it to properly formulate the interesting theorem that the dual of an elementary topos is Malcev, i.e., that every elementary topos is co-Malcev.',
	'https://ncatlab.org/nlab/show/Malcev+category',
	'Malcev',
	TRUE
),
(
	'generator',
	'has a',
	'An object $G$ of a category is called a <i>generator</i> if for every pair of parallel morphisms $f,g : A \to B$, $f = g$ holds if for every morphism $h : G \to A$ we have $f \circ h = g \circ h$. Equivalently, the functor $\mathrm{Hom}(G,-) : \mathcal{C} \to \mathbf{Set}^+$ is faithful. This property refers to the existence of a generator.',
	'https://ncatlab.org/nlab/show/separator',
	'cogenerator',
	TRUE
),
(
	'cogenerator',
	'has a',
	'An object $Q$ of a category is called a <i>cogenerator</i> if for every pair of parallel morphisms $f,g : A \to B$, $f = g$ holds if for every morphism $h : B \to Q$ we have $h \circ f = h \circ g$. Equivalently, the functor $\mathrm{Hom}(-,Q) : \mathcal{C}^{\mathrm{op}} \to \mathbf{Set}^+$ is faithful. This property refers to the existence of a cogenerator.',
	'https://ncatlab.org/nlab/show/cogenerator',
	'generator',
	TRUE
);