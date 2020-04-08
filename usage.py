#!/usr/bin/env python3

import numpy as np

import activation_dash_component
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    activation_dash_component.ActivationDashComponent(
        id='activations',
        values=np.random.rand(10,10),
        label='my-label'
    ),
    html.Div(id='output')
])



if __name__ == '__main__':
    app.run_server(debug=True, port=4444)
