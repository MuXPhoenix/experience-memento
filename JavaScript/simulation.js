// 获取画布和上下文
const canvas = document.getElementById('graph-canvas')
const ctx = canvas.getContext('2d')

// 绘制图的函数
function drawGraph(graph) {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 绘制节点
  graph.vertices.forEach((vertex, index) => {
    const x = 100 + index * 200
    const y = canvas.height / 2
    ctx.beginPath()
    ctx.arc(x, y, 30, 0, 2 * Math.PI)
    ctx.fillStyle = '#009688'
    ctx.fill()
    ctx.stroke()

    // 绘制节点标签
    ctx.fillStyle = '#000'
    ctx.font = '14px Arial'
    ctx.fillText(vertex, x - 10, y + 5)
  })

  // 绘制边
  graph.edges.forEach(edge => {
    const vertex1Index = graph.vertices.indexOf(edge.vertex1)
    const vertex2Index = graph.vertices.indexOf(edge.vertex2)

    const x1 = 100 + vertex1Index * 200
    const x2 = 100 + vertex2Index * 200
    const y = canvas.height / 2

    // 绘制边的线
    ctx.beginPath()
    ctx.moveTo(x1 + 30, y)
    ctx.lineTo(x2 - 30, y)
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 2
    ctx.stroke()

    // 绘制边的权重
    const weightX = (x1 + x2) / 2
    const weightY = y - 40
    ctx.fillStyle = '#000'
    ctx.font = '18px Arial'
    ctx.fillText(edge.weight, weightX, weightY)
  })
}

// 初始化时绘制图
drawGraph(cityGraph)
