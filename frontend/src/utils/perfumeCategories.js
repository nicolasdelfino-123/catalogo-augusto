export const PERFUME_CATEGORY_DEFINITIONS = [
    { id: 1, name: "Fragancias Exclusivas", slug: "fragancias-exclusivas" },
];

export const PERFUME_CATEGORY_NAMES = PERFUME_CATEGORY_DEFINITIONS.map((category) => category.name);

export const CATEGORY_ID_TO_NAME = {
    1: "Fragancias Exclusivas",
    2: "Fragancias Exclusivas",
    3: "Fragancias Exclusivas",
    4: "Fragancias Exclusivas",
    5: "Fragancias Exclusivas",
    6: "Fragancias Exclusivas",
    7: "Fragancias Exclusivas",
};

export const CATEGORY_NAME_TO_ID = {
    "Fragancias Exclusivas": 1,
    Masculinos: 1,
    "Perfumes masculinos": 1,
    "Perfumes Masculinos": 1,
    "Fragancias de Hombre": 1,
    "Vapes Desechables": 1,
    "Perfumes de Diseñador": 1,
    "Perfumes de Disenador": 1,
    Resistencias: 1,
    Perfumes: 1,
    Femeninos: 1,
    "Fragancias de Mujer": 1,
    "Pods Recargables": 1,
    "Productos Karseell": 1,
    Unisex: 1,
    "Líquidos": 1,
    Celulares: 1,
    "Body splash victoria secret": 1,
    "Body Splash Victoria Secret": 1,
};

export const LEGACY_CATEGORY_NAME_TO_CURRENT = {
    Masculinos: "Fragancias Exclusivas",
    Femeninos: "Fragancias Exclusivas",
    "Fragancias de Hombre": "Fragancias Exclusivas",
    "Fragancias de Mujer": "Fragancias Exclusivas",
    "Vapes Desechables": "Fragancias Exclusivas",
    "Pods Recargables": "Fragancias Exclusivas",
    "Líquidos": "Fragancias Exclusivas",
    Resistencias: "Fragancias Exclusivas",
    Celulares: "Fragancias Exclusivas",
    Perfumes: "Fragancias Exclusivas",
    "Productos Karseell": "Fragancias Exclusivas",
    Unisex: "Fragancias Exclusivas",
    "Body splash victoria secret": "Fragancias Exclusivas",
    "Body Splash Victoria Secret": "Fragancias Exclusivas",
    "Perfumes de Diseñador": "Fragancias Exclusivas",
    "Perfumes de Disenador": "Fragancias Exclusivas",
};

export const SLUG_TO_NAME = {
    "fragancias-exclusivas": "Fragancias Exclusivas",
    masculinos: "Fragancias Exclusivas",
    femeninos: "Fragancias Exclusivas",
    "perfumes-masculinos": "Fragancias Exclusivas",
    perfumes: "Fragancias Exclusivas",
    "vapes-desechables": "Fragancias Exclusivas",
    resistencias: "Fragancias Exclusivas",
    "perfumes-de-disenador": "Fragancias Exclusivas",
    "pods-recargables": "Fragancias Exclusivas",
    unisex: "Fragancias Exclusivas",
    liquidos: "Fragancias Exclusivas",
    celulares: "Fragancias Exclusivas",
    "body-splash-victoria-secret": "Fragancias Exclusivas",
};

export const SLUG_TO_ID = {
    "fragancias-exclusivas": 1,
    masculinos: 1,
    femeninos: 1,
    "perfumes-masculinos": 1,
    perfumes: 1,
    "vapes-desechables": 1,
    resistencias: 1,
    "perfumes-de-disenador": 1,
    "pods-recargables": 1,
    unisex: 1,
    liquidos: 1,
    celulares: 1,
    "body-splash-victoria-secret": 1,
};

export const NAME_TO_SLUG = {
    "Fragancias Exclusivas": "fragancias-exclusivas",
    Masculinos: "fragancias-exclusivas",
    "Perfumes masculinos": "fragancias-exclusivas",
    "Perfumes Masculinos": "fragancias-exclusivas",
    "Fragancias de Hombre": "fragancias-exclusivas",
    "Vapes Desechables": "fragancias-exclusivas",
    Resistencias: "fragancias-exclusivas",
    Perfumes: "fragancias-exclusivas",
    "Perfumes de Diseñador": "fragancias-exclusivas",
    "Perfumes de Disenador": "fragancias-exclusivas",
    Femeninos: "fragancias-exclusivas",
    "Fragancias de Mujer": "fragancias-exclusivas",
    "Pods Recargables": "fragancias-exclusivas",
    "Productos Karseell": "fragancias-exclusivas",
    Unisex: "fragancias-exclusivas",
    "Líquidos": "fragancias-exclusivas",
    Celulares: "fragancias-exclusivas",
    "Body splash victoria secret": "fragancias-exclusivas",
    "Body Splash Victoria Secret": "fragancias-exclusivas",
};

export const mapCategoryIdFromName = (value = "") => {
    void value;
    return 1;
};

export const getNormalizedCategoryId = (product) => {
    const byId = CATEGORY_ID_TO_NAME[Number(product?.category_id)];
    if (byId) return CATEGORY_NAME_TO_ID[byId] || 1;

    const raw = String(product?.category_name || "").trim();
    if (!raw) return 1;

    return CATEGORY_NAME_TO_ID[LEGACY_CATEGORY_NAME_TO_CURRENT[raw] || raw] || mapCategoryIdFromName(raw);
};

export const getDisplayCategoryName = (product) => {
    const normalizedId = getNormalizedCategoryId(product);
    return CATEGORY_ID_TO_NAME[normalizedId] || "Fragancias Exclusivas";
};
