#!/usr/bin/env python3

import numpy as np

from activation_dash_component import ActivationDashComponent
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

labels = [f'\\sqrt{{{i}}}' for i in range(10)]

app.layout = html.Div([
    ActivationDashComponent.ActivationDashComponent(
        id='activations',
        values=np.random.rand(10, 10),
        xlabel=labels,
        ylabel=labels
    ),
    html.Div(id='output')
])


if __name__ == '__main__':
    app.run_server(debug=True, port=4444)
