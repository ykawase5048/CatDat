INSERT INTO functors (
    id,
    name,
    source,
    target,
    description,
    url
)
VALUES
    (
        'id_Set',
        'identity functor on the category of sets',
        'Set',
        'Set',
        'Every category has an identity functor. Here, we specify that it is for the category of sets.',
        'https://ncatlab.org/nlab/show/identity+functor'
    ),
    (
        'abelianize',
        'abelianization functor for groups',
        'Grp',
        'Ab',
        'This functor maps a group $G$ to its abelianization $G/[G,G]$.',
        'https://ncatlab.org/nlab/show/abelianization'
    ),
    (
        'forget_vector',
        'forgetful functor for vector spaces',
        'Vect',
        'Set',
        'This functor maps a vector space to its underlying set.',
        'https://ncatlab.org/nlab/show/forgetful+functor'
    ),
    (
        'free_group',
        'free group functor',
        'Set',
        'Grp',
        'This functor maps a set to the free group on that set.',
        'https://ncatlab.org/nlab/show/free+functor'
    ),
    (
        'power_set_covariant',
        'covariant power set functor',
        'Set',
        'Set',
        'This functor maps a set $X$ to its power set $P(X)$ and a map of sets $f : X \to Y$ to the induced map $f_* : P(X) \to P(Y)$.',
        'https://ncatlab.org/nlab/show/power+set'
    );