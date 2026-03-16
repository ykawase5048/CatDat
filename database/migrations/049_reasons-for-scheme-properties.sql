INSERT OR REPLACE INTO category_properties
    (category_id, property_id, reason)
VALUES
    (
		'LRS',
		'cocomplete',
		'See Demazure-Gabriel''s "Groupes algébriques", I. §1. 1.6. Specifically, the forgetful functor to ringed spaces preserves colimits, and colimits of ringed spaces are built from colimits of topological spaces and limits of commutative rings, see <a href="https://math.stackexchange.com/questions/1646202" target="_blank">MSE/1646202</a>.'
	),
    (
        'LRS',
        'disjoint coproducts',
        'This can easily be derived from the explicit construction of coproducts: The topological space is the disjoint union, the sheaf is the "product".'
    ),
    (
        'LRS',
        'well-powered',
        'Let $f : X \to Y$ be a monomorphism of locally ringed spaces. I claim that $f$ is injective, from which the claim will follow. The diagonal $\Delta : X \to X \times_Y X$ is an isomorphism. By the explicit construction of fiber products, $X \times_Y X$ consists of triples $(x_1,x_2,\mathfrak{p})$ where $x_1,x_2 \in X$, $y := f(x_1) = f(x_2)$ and $\mathfrak{p}$ is a prime ideal in $k(x_1) \otimes_{k(y)} k(x_2)$. The map $\Delta$ is given by $\Delta(x) = \bigl(x,x,\ker(k(x) \otimes_{k(f(x))} k(x) \to k(x)\bigr)$, and it is bijective. This clearly implies that $f$ is injective (and that each tensor product $k(x) \otimes_{k(f(x))} k(x)$ has a unique prime ideal, namely the kernel mentioned).'
    ),
    (
        'LRS',
        'well-copowered',
        'It is enough to prove that every epimorphism of locally ringed spaces is surjective. The forgetful functor $\mathbf{LRS} \to \mathbf{RS}$ has a right adjoint (see <a href="https://arxiv.org/abs/1103.2139">here</a>), so it preserves epimorphisms. The forgetful functor $\mathbf{RS} \to \mathbf{Top}$ also has a right adjoint, namely $X \mapsto (X,\underline{\mathbb{Z}})$, so it also preserves epimorphisms.'
    ),
    (
        'Sch',
        'disjoint coproducts',
        'This follows from the corresponding fact for locally ringed spaces.'
    ),
    (
        'Sch',
        'well-powered',
        'This is because every monomorphism of schemes is injective, so that the size of the underlying set of a subobject is bounded.'
    );

DELETE FROM category_monomorphisms WHERE category_id = 'Sch';

INSERT INTO category_comments
    (category_id, comment)
VALUES
    (
        'Sch',
        'Monomorphisms are discussed at <a href="https://mathoverflow.net/questions/56591" target="_blank">MO/56591</a>. At least the case of morphisms of locally finite type is understood.'
    );