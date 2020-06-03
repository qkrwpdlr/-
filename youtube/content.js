document.getElementById("reply-add-button").onclick = function() {
  var inputText = document.getElementById("reply-add-text").value;
  var inputData = `
        <div class="yotube-reply-content">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERUSExMVFRUWGBoVFxcYFhUYHRcdFxoXHiAWGR0YHSgiHh0lIhsaIjIhJSsrLy4uFyAzODMtOCgxLisBCgoKDg0OGxAQGjUmHyUtLS8rLS0tLTcvLTIvLS0tLTUtLS01LS0tLS0tLS0tLSstLS0tLS0tLS4tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABLEAABAwIDBAYGBAoHCQEAAAABAAIDBBEFEiEGMUFRBxMiYXGBFDJCUpGhI3KxwRUkM2JzgpKy0fA0NUNTY6LhFiVUZJOjs8LxCP/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACwRAAICAQQABAUEAwAAAAAAAAABAhEDBBIhMTJBUYETIkJhwUOR0fEUYnH/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIqxt5tpDhkIe8Z5ZDlhhDgC88yT6rBcXd3ql02OY5Ut61tVQxNO5kTOuAvwc4k6+BXUm+icISnxFHW0XLotvMRo9cQpWTQj1qilJu0e8+N2viRYBdHwzEIqiFk8Lw+ORoc1w4g/YeFjusjVHJRcXTRtIiLhEIqVi3SfQQyuhYZql7NHiniMoYeRdcD4Erxh/Sthsj2xvfLTvcbATxOj+LtWgd5KCi8IvjTfUL6gCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgOYUWB0+JY5iL6uMTNpBTwwtdfK3MxznXAOvaudfeXzbLYFlIw1+Ft6iaFpfJC3MY5426uYW+9bdbf42I2KSuZhuOVTKlwZFiIikgldo3PE3K6Ik6A9q4v8Am8XBTm2G3FNR2gs6oqZB2KeIZnOBG93Bre88L2Bsh1Np8EHg2IMqqeOZo7MrAbHW197T4G48ln6EgRQTAfkhVziEcBHdtgO6+b5qibMbL4k2lZBLUilibmOSJodIcxJ7T9zdT7N1B9H+A1LpXwTS1EcMbSWsZO+MhxdvyA6cbg2OoVsrdG3PuybVXJ+mFzbpMxGaeqhwmGR0LZIzPUyNNndUHZRGw8MxBv5cLg0Lb/Bp6aOJ9LU1rnOfkLevlfvGhJuMtt3fmW3WbNVkEba0V8z6mKHKRKzrrtvcxD1nAXJ95RUXZTHBJSprrsm66oiw2KKnpIM00rskELd8juL3nfYcXH5bxvxdF09W0HE66V9yHdRBljjafduQc1udge/iqPsFtbM6tfiM9K6pEcYgvBvgBJJcI3auLgDqDoCfBd22fx+mroRNTSCRl7HeC1w3tc06tPceYO4rkpWM2Vy4XC8jm1NjtRgU7sNdFNWxOb1lBlIztbcgxSOO5rbbwDYdxs3Zkx3Hag3HotCzgLGeQeJ9T7F923nbPjlHFHq6killmPuiZoa1h79xtycs+0Fe2Cnkkdm0aQMrS43INtADx4kW5qUYpq2WYMEZRcpFDftDi0tb6G3FHEh+R7skMR03ljALu0vuv5K1/gOt4YvW37y0j4KudGNCXvfWDRjuwDlIzcS0agZWnkwcr710RShBNFuDBCUd0kQUVVjtPqyrp6sD2Z4urJHIOj495KmsD6TYnSCnr4XUM50b1hDon/UlGnxsNbXK9rj+3VUK2uZAyR0l3sjbGOsY1nvF4cD2tTqALAcVycEuiGowQgrj2fpoFfVxrB8RrcEa3OXVVAAM8YOZ9L+dGSAXRjkbWHLUnrOE4pDVQsngkbJG8Xa5vHuPEEbiDqCLFVtV2Y5wlB0zcREXCIREQBERAEREAREQBEVA6T9o5W9XhtI61VVA5ni94IdQ6XTcTqB4G2tkOpW6RE9Ie0LcQe/CqSKKcj+kVEgDo6Y6jsc5d403HTnl+bMbL09CzLELvI7cjvWd3dze4LcwPB4qSFsMLbNbvPFx4uceJK31fGFHq4NOsat9hRuGYa2OaeQNt1jhwtewuT6xBuSeAOnHepJFMvaT5NOvoRK6PNfKx2ewLhcgdn1SNx5rLiDy2KQtF3ZXZRrqbaDTvss6IKIzZzChS07Ix61gXnTV1hfUAXHLRQO04nw2R2KUIAcWllTGQSx4O6UtFtWusSR/G9xXieJr2uY4AtcC1wO4gixBXHFNUVzxKUNpC7I4WIojM6Tr5qm00s/94Xai35ovoO/huUb0lz/izYbNs92Zxc5gDWs1Js4G53cPML7sTI6nlnw15J6g54Sd7oXm4H6pNvPuWhts1lRX01M0OkcPygDQ9rGuIsXhxyDQOO4nQcwovw8FUmvg0v8AhYNjcGZS0rALl72hz3OFiSdQ23ANvYDgp1fGNAAAFgBYAaWA4BfVNKjTGKikkRm0lW+KmkewOz2IblYH2J45S4A+Z5LnPRRhokqJJ3svkJLXZA1uY2GlmZbjXQO05cVLbeyOqpxSASZGkCzWgZ3utY5nA9kX4DnyV3wjDmU0LIYxZrBbxPE68yoVukZq+JlvyRuKpl0mCzGrpgXUUjgaqmG5l9OviHAjiPLdYtu9Ph0r9WtNuZ0HzWWbAJS0tLWuBBBF94O8G6S2vglmeKa2tqyy0VWyaNksbg5j2h7XDcQ4XBCzLm/RhO+jqKjB5sw6r8Ypc3GF51YOeV3xJdwC6QqDymqdBERDgREQBERAEREBq4piEdPDJPKbRxMc9x7mi5tzPcuTbFxSTmbE5x9NVuLmg/2cI9SMd1gPEBqmul+sdM6lwthI9Kf1kxHCGIgkd1zu+otyNgaA0CwAAA5AbgrMa8zbo8dvc/I9IvL5ALXIFzYXIFzyHevSuPRCIiAIiIAiIgKhtOOpxKgqRoHudSyHmHjsA/rEnyW1s/lmq6qcssWvbCx2bO09XmBfGS0ZSb2cBuIWt0ps/wB3ukHrRSRSNPI5w2/+ZS+ymHGClYxxBc68jrEkAv1sCSSQFH6jOk/iteXf4JdYa2o6uN8hF8jS61w29hfe7QeJWZUfpOxSoijZFCQ0SaOLmk5rkBrGkDQ3528V1ukW5J7Itmp0fUpqZpKx7A20jyz6OE3JLhpMGXeACRdtt3kuv4LhVwJHjT2R95VS6OMBdFDHDI9zzcvdmGXKPcDb6Dd8SV0pzg0EkgAC5J0AA4nuVTdKjDlyOEFBdvs9Iua0mK4pizpJqCdlHRscWQyPhbI+pLTYvs71WXFtNfE3tMbIbU1D6h2HV8IirI4+tDmG8c8d8vWM4jXh3HdqBWYjS6RG9RX4VXC4y1HoryOLahpAzdwsT5q/qg9Nxy4WZh60M0MrfESAf+yvyAIiIAiIgCIiAIiIDkcknpGP1sp3U0UVMz9YZ3ed83xVhVX2MeZJ8SmPt10oHgzd8irQtEPCevplWNFQ222NfXzQSCfq2x6OGtxrfMy253DXkFbwERSotUEm2vMIiISCIiAr23WNzUdIZoYw9wc1pzXIYDftEDfwG/2lK4NVPlp4pXsyPexrnN17JIuRrqtxE8yO17rvj0IHbyHPh1UP8Mu/YId9y3dnKjrKSnf70MZ+LAsG2P8AQKr9BJ+6U2O/q+l/QR/uhc+oj+r7fkmFy6kp/Tsac5wexsLhIGuA1ybjYR2FyG+sQ63PcOh45XNggfI6xsLBp9pztAzvuTZV3o7wTq4jUvYxsspNgywaxgOjWhug1uTv14rkuWkQyrdOMfdnTdmY/Xd4N+8/coTpZq5DTRUMJyy18zabN7sZ1kd3jLoe5xVj2bH0R+sfsCq+2WuOYKDu/HD5iFqpn2edqHeRk23E6egmosMaxzRKx7ISLZR1DQS1x33I48/FQ2MkHaOhA3ilnL/qk2F+691O7YbLR18bGl7opYniSGZnrRPHEcweI7hyBWnspsaaWeSrnqZKuqkYIzK9rWhrAb5Y2C+UE2J14cNbxKSP6cAPwJU+MNv+tGrzEeyL8gqH0w/S09NRDV1XVRR2/MaczneAsPir8gCIiAIiIAiIgCIiA41sDp6cz3a6cfNqtSreAtEeJYrButUNmt+maXKyLRDwnsad3iQRSlHgkj9Xdgd+/wCHBS9Pg8TfZzHm7X5bkc0iM9Vjjx2VUC69dW7kfgVWekfpdbRSvpKKON8rOzJI71I3cWNa22Zw4m9gdNdVQqPprxZj8z3QyNv6romgeALLH5qHxfsUf53+p2BFs9H+2lPjELndWGSx2EsTrOtfc5ptq02PeCD3EzlTgUbtWksPxHwXVkXmThrIvxKitItytw6SLeLj3hu8+S01YnZrjJSVoh9sT+IVX6CT90pscPxCl/QR/uha3SDUCPDaknizJ5vIaPtUpgkHV00DOLYmNPk0Bc+or/U9vyRe2cjurjYwkFz94cW7gRlIa1znXLh2QNbb+c5SQ5GNYPZaBr3BVfEp458SpWtlIEeclt3NBcL6WuCSbHUXFmu0PC2ouzsOZN+xZtnD9EfrH7Aqt0sNMDaPEmi/oVQ10lt/Uy2Y+3f6o81ZNmXdh45Ov8R/opHEoo3wyNmaHRljg9rhcFtjcEeCon2eXnVZGZoZWvaHtIc1wDmkaggi4I7l9e8AEk2A1JPADiVxbo1xHGYKGN8FG2spZS90LPSGxvpwJHNyEyb2m1xv8VZn7OYpif8AWMzaSmJuaSnN3PHuzS8uYbcHuUSk+YBL+FcXdXtuaOha6CmdwllfpJK3mAOz39kroy18PoY4ImQwsbHGwZWtaLAD+ePFbCAIiIAiIgCIiAIihdq9p6fD4eundv0Yxur5He6xvE/IcUBRtq6c0+PQyD1a6AxHvlhII88uUDxXQMKwsRgOdq/93uH8Vx7agYriLPTH5ab0cielpWtu/Mw3DpH785A0A420C69srjkddSQ1Ue6RoJHuuGjmHvBBHkpW0qL5SyQgoPhMllq4pMWQSvbvbG9w8Q0kLaXwhRKD8PveXEkkkk3JOpJPEryu9ba9BolkdNh8jI8xzGCS4YCf7tzQSB+aQfEDdRIehzGHSZDAxov+UdLHl8eyS7/KgJD/APPL3jFXBoJaaeQP7hmjIJ/WAHmv0oqd0a7CR4VA5ubrJpLGWS1hpuYzjlFzv1JJPIC4oD4QoTFsIFi+MWO8t594/gpxYK+rZDE+WRwayNpe5x4BouSuptE8eSUHaOObb/jE9HQDUSyddKP8OLWzu4m/m1W2V9mkk2ABN+VgqbsRXx11TVYgXM62RxZHECM0MIOgI5uOpI0077Ky7QPApZi7d1br9hr+G7K7sm+7XTXXRXp8WepjlcXk9Sh9H1M6or5q5xY4APYC1pAzEt7QIY0OJGa5tftfDpap3RphuSB9Qbjr3XDS1oIa3QFxABudTb1RwG9XFIdHdPGoK/MmdmpLPc3mL/A/6rY21qTFh1ZIN7aeUjxyOt81FYTNlmYeZy/HRbPSWf8AdNb+gf8AYqsi5MOrjWS/U9dG9P1eE0Tf+Xjd+20OP2qyKJ2SbagpB/y8P/japZQMoREQBERAEREAREQETtTj8VBSyVU3qsGgG97jo1g7yfhv4LmeB4VLUTnEq/tVEmsURuW0zODWg7nW3nmTxJK39v5fTMXpaLfFSs9MlHAvJyxtPeN/eHlTCtxx8zdpMKfzv2CrmE4icGrHZ/6uq35nH/hpne0f8N2nhYbra7WIbVUUDzHLURteDYtuSRfnlBt5rIzEaOsY6JssMzXizmB7SSD3XupySlwac0YZFtvk6e1wIuDcHUHmvq4vQ7S1OCzR0dn1tLIHOiibczwNbvDdLPYNbA23cLLpuzu1lHXC9PO1zh60Z7MjfrMd2h42sqGqPKlFxdMm0RFwiERaWL4tBSxmWolZFGN7nG3kOZ7hqgN1co2zxc4rUHD6d34nC4GrlaTaRzTpTsI3jiSPu7TFdoqvFrx03WUlCdHTOGWaoHKIeww+9vN/EKSwvDoqeJsMLAxjdwH2k8SeasjC+zXp9O5PdLoh8d2SimLZYT6PURj6OaMWtbc14HrN4a8Pgq/iG0TnxOoq1jY6lrmXFiWTtBuHsAGoJA7P8CB0JQm1ezrK2HKTklZ2oZRoWO4ajgdLjz3gKxx9DZkx8Nw/skMJiLYI2kWORtxrvIud+q21X9i8YM8GSRoZPAepmZusW6BwHIgeGh5KwKS6LYNOKaPrXWIPLVS3SIzPhNbb/h5HfBpP3KIVrlp+upDGf7SEsP6zLfeqspj1q6ZrbFzB+HUbxxp4T/22qZVK6Gqsy4LSE72h8f7Ej2j5AK6qo88IiIAiIgCIiALSxnFoKSF09RI2ONgu5x+wAakngBqVurkO2k5xDGDSv/o9A1r3MO6SWVoIJHENB+TveUZSUVbOxVuirsrq6trquppWOgjqnstUSNF2xRNyjI07y7Q/zdSn+yD+OI19zvPXkA+StKw+lR9Z1WdvWWzZMwzW962+3esUtRN9G6ONJUyNwrZikgZlbCxx9p72te5x5uJH2aLFX7I0Mo1gYw780Y6sg87tt81s43gUdVlzvlblvbq5Cy97b7b9y0ts6s09C5sZJe8Np47ntEv7O873Wub9yhFybVPlhpJO1wfOhnB+sqZaxz5JW5jFA+Vxe7q4z61zzdbTT1SulY/sTQ1js8sDRLvE0ZMcgPPOyxPndYOj/B201KyMbmNDL88o7TvNxJVoXpvjgy5eHt9CjN2PxGCwpcXnyj2KqOOov3ZzZy9+i7Qg2FRhrh7zopwfgDZXZFwqKS7B8cl0fiNNAOJhpcx8AZXaeK8N6OKcXmnknrahurH1MmcMOhsxnqtGnI2V5RDqdOyiItrEockrm8L3HgdVqrUj3Iu0mgiIh0p20rfQ62CvboyVwpqm24h3qSH6tt/IAK4qO2jwsVVLLAfbYQ2/Bw1afIgLS2GxQ1FFG59+sZeKUHeHx6G/eRY+a4uGVR+WbXrz/JPK44X+Rj+qFTlcsNbaJgPuhQydGfW+FFN6GNMNI5VE4ty+kOivaonQ7/Q5xyrKgf5wr2qTzgiIgCIiAIiIDxNIGtLnEBrQSSeAGpK4rsjM6pkqsRcLGrlJYN1o4rtZfvtp5LpvSBIW4XWkEg+jTaj6jlz/AGQAFBTW/uWfNov81n1MqhRfgVyJdQ2B7PR075JSesmlc5zpXDtWJ0YOQGm7fbwAl5XENJAuQCQOdhuUTsli7qukjncGhzswcG3sC1xGlzfcAfNYle110anVqyYVYxBvpOK00G9lM01UmmmbcweINj5qzqF6M4OvqaqqI/LVPVtPOOHQW/ngtGkjc79A+0vf9jrWHw5Imt5DXxOpWyiLaee3bsIiIcCIiAru00VntdzFvh/9VD28gqjTdbSSPZLC7rbN/tGgG7SOPOxve1rLpO0UV4r+6Qfjp96rKvhzGj1NP8+GimbI7dNqBHHUtEMrxdjv7ObW3YPB19C08fgrmuftwaBtZNhs7M1PU3qabh1bxfO1h4HjpwA5rew/FZsPlbSVry+F5y09UePKOXk7v/kE2uyWPJJKp/v/ACXJVHAm+j4pV0+5k7W1cY4A3yv8yTfyXRsPwQu7UlwODeJ8eSoe1GIUkmMYf6HLHIWsqWT9WQ7K0NGXOR+df4I5K1RDJng5xS7stlBT9ZI1vfr4DerkFE4BRZG5zvcNO4f6rFtxi4pMPqai9iyJ2X67hlYP2iFXOVsy6rJvnS6RX+hk5qCSQatkqqh7TzBfa/yV8Vb6OcI9EwylgIs4RhzxydJd7h5FxHkrIoGYIiIAiIgCIiAxVVOyRjo3tDmPaWuadzg4WIPcQuJ7ExiF9bSAnLT1cjI2k3LWXOUa8NCfiu4rn21vR4+Sd9bQT+j1L7GRrruimsPaHsnTeAfC5uq8sN8aJ45bZWa6wwQRxNysa2Nt72ADRdx+0kqGwfaAmR1LVtbBVxuyujJsH8nxk7wd9rnnqpPFsMiqYnQzNzMda4uQbg3BBC89xcXUjcpKStGerlyRvd7rXO+AJXnoXpstHTX3lr5P2nO/ioXHKcU2Fzxh73hsL2h0jszjmBGp/Wt5BXDo1g6uCmYd7aZgPjlZf5rbo1xJkZdN/YvSIivMAUdiGNww5g9xu0ZiA03tzHA7xx4qRVexjDaKWUmWQCUMJt1gDmsyn2TewFyb29o81xnV9yTq8VhiIzvDQb9okWBaWixN9DdwFlpzbT0zGveXHKy13ZTbUPIt5MPyWnBhNG8OELnAD6UljifXc0BwLgdxgDbDdlKN2Wp2MZGx5YC4ZblpJcGv0bcXvYvvbeLrnJ2kTdeA6J45tJA8rhU9WWHEYHRmTrMwY3M421sBq7La9j9yrj22JHI2+CvxPs3aJ8NFT6Q6dwgZVxj6WkkEze9twHtvyI1P1VOVNPDWU+V7Q+KVgd5OAII5EaEHgtitpWyxvid6r2uYfBwI+9fOh/JNhrY5GtMtM+Smk8Y3af5S0eSlJ7WW5cixytrhlbp6HGBHHRCsDKaJxyzsJ9Icy1mxHhp/DlZW/YnYeGkjaBGAANXOAzya3u8gbu5XCCjjZ6rADztr8Vlc4AXJsBqTyVW5eRheWK8Cr7noLm+Ov/C+JsoWdqjonCarcNWySi+Sn7wNbj6w0LQsmNbYzV8jqHCO27dNW74oGnfkd7clt1vK+pba9k9nIcPp208IJF8z3n1pHnfI88SfkABwUSgmUREAREQBERAEREAREQELtJspR17Q2qgbJbRrtQ9v1XtsQO69lSK7o2qqUh+G1bnDW9PVuL2EcMjmi7bfyV1FFxpPhnU2uj8/7fMxZlDN6RQsii7IdK2eN41e0DK0HNqbb11XZZobIGjcI7fDKrDiWHQ1EZinjZLGbEseA4GxuLg969w0kbTdrGg8wAF2CjBNJF0c3yyT8zOiIhQeJJGtF3EAcyQPtUVXUAmflkkjcztDIGkPAc0tPaEm/XfbipOenY+2dodbdcA2WA4VAQAYmWAsBlGgAtb4BcOo0sIwl0L5e03q3BjI2gWLGszaE8fW7+POwy4jhMcwjD3vb1by9pa8scCWuZ6w19s7vBZfwLTWt1MZFgNWg6DdvXp+EwEkmJhJuCcoub79UoWQFRspEKd7IpGh7mdUZXm/0djdjgDYjK4nW99DwBGpVhrZHsFtHHQW0F+XAK0fgan0+hZpu7I5W+xGYNTB2YQxhx0uGgHwUoPaaMOf4bbZU1TdmqLEBimIR0NTHDrHOYpWF8cvWN1dpq0g6XG+/cux/g6H+7b8AvlPhsMb3SsiY2RwDXPDQHEDc0neQOSnOaaJZ9RHJGkimNpdpXGzp8NjHvMZO4/BwsvEmwFXV6YniUs8V7mCFjYGOtweW6uH83XQUVZkNTC8NhpomwwRsijbuawADx03k8SdSttEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB/9k=" alt="" class="yotube-reply-content-img">
        <div class="yotube-reply-content-post">
            <span class="yotube-reply-content-title">보노보노</span>
            <span class="yotube-reply-content-content">${inputText}</span>
            <span class="yotube-reply-content-goodBad"><i class="fas fa-thumbs-up"></i><i class="fas fa-thumbs-down"></i> 댓글</span>
        </div>
        </div>
        `;
  document.getElementById("reply-add-text").value = "";
  document.getElementsByClassName("yotube-reply")[0].innerHTML =
    inputData + document.getElementsByClassName("yotube-reply")[0].innerHTML;
  alert("댓글이 추가되었습니다.");
};

document.getElementsByClassName("youtuber-div-views")[0].onclick = function() {
  document.getElementsByClassName(
    "youtuber-div-views"
  )[0].style.backgroundColor = "rgb(128,128,128)";
};