from django.shortcuts import render

# Create your views here.


def render_index(request):
   return render(request, "index.html")


def HistogramHandler(request):
   import json
   myjson = {
      'type': 'column',
      'colorByPoint': 'true',
      'data': [129.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      'showInLegend': 'true'
   }
   data = json.dumps(myjson)
   return render(request, "statics.html", locals())


def PieHandler(request):
    return render(request, "pie.html")