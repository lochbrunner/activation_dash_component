# AUTO GENERATED FILE - DO NOT EDIT

rActivationDashComponent <- function(id=NULL, label=NULL, values=NULL) {
    
    props <- list(id=id, label=label, values=values)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ActivationDashComponent',
        namespace = 'activation_dash_component',
        propNames = c('id', 'label', 'values'),
        package = 'activationDashComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
