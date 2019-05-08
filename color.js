/*Copyright 2015-2019 Kirk McDonald

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/
"use strict"

function ColorScheme(displayName, name, scheme) {
    this.displayName = displayName
    this.name = name
    this.scheme = scheme
}
ColorScheme.prototype = {
    constructor: ColorScheme,
    apply: function() {
        var html = document.documentElement
        for (var name in this.scheme) {
            var value = this.scheme[name]
            html.style.setProperty(name, value)
        }
    }
}

var colorSchemes = [
    new ColorScheme(
        "Default",
        "default",
        {
            "--main": "#403f40",
            "--main-foreground": "#313031",
            "--main-bright": "#8e8e8e",
            "--main-bright-top": "#aaaaaa",
            "--main-bright-bottom": "#353535",
            "--main-dark": "#313031",
            "--main-top": "#1a1817",
            "--main-bottom": "#615e5d",
            "--main-side": "#261F1C",
            "--foreground": "#c8c8c8",
            "--dark": "#313031",
            "--bright": "#dac5a6",
            "--accent": "#FEAD00",
            "--depth-shadow": "inset 0 0 8px rgba(0, 0, 0, 1)",
            "--slot-shadow": "0 0 8px 1px #373331"
        }
    ),
    new ColorScheme(
        "Printer-friendly",
        "printer",
        {
            "--dark-overlay": "#ffffff",
            "--main": "#ffffff",
            "--main-foreground": "#000000",
            "--main-bright": "#ffffff",
            "--main-bright-top": "#ffffff",
            "--main-bright-bottom": "#ffffff",
            "--main-dark": "#f0f0f0",
            "--main-top": "#f0f0f0",
            "--main-bottom": "#f0f0f0",
            "--main-side": "#f0f0f0",
            "--foreground": "#000000",
            "--dark": "#000000",
            "--bright": "#111111",
            "--accent": "#222222",
            "--depth-shadow": "0 0 rgba(0, 0, 0, 0)",
            "--slot-shadow": "0 0 rgba(0, 0, 0, 0)"
        }
    )
]
