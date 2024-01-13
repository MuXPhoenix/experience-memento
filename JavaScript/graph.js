class Graph {
  constructor() {
    this.vertices = []
    this.edges = []
  }

  addVertex(vertex) {
    this.vertices.push(vertex)
  }

  addEdge(vertex1, vertex2, weight = 1) {
    this.edges.push({ vertex1, vertex2, weight })
  }
}

// 示例：创建一个城市交通图
const cityGraph = new Graph()

// 添加城市节点
cityGraph.addVertex('CityA')
cityGraph.addVertex('CityB')
cityGraph.addVertex('CityC')
cityGraph.addVertex('CityD')

// 添加道路（边）
cityGraph.addEdge('CityA', 'CityB', 3)
cityGraph.addEdge('CityA', 'CityC', 2)
cityGraph.addEdge('CityB', 'CityD', 4)
cityGraph.addEdge('CityC', 'CityD', 1)
