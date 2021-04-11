const webApiKnowledgeList = [
  { name: 'EventTarget' },
  {
    name: 'Event'
  },
  {
    name: 'Node'
  },
  {
    name: 'Document'
  },
  {
    name: 'Element'
  }
];

const webApiEdgeList = [
  {
    from: 'Node',
    to: 'EventTarget',
    relation: ''
  },
  {
    from: 'Element',
    to: 'Node',
    relation: ''
  },
  {
    from: 'Document',
    to: 'Node',
    relation: ''
  },
  {
    from: 'Attr',
    to: 'Node',
    relation: ''
  },
  {
    from: 'DocumentType',
    to: 'Node',
    relation: ''
  },
  {
    from: 'HTMLElement',
    to: 'Element',
    relation: ''
  }
];





























