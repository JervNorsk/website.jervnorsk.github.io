with(rootProject) {
    name = "jervnorsk-website"
}

includeBuild("backend") {
    name="${rootProject.name}-${name}"
}

includeBuild("frontend") {
    name="${rootProject.name}-${name}"
}
