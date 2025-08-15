import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { UserCheck, ShoppingCart, ChefHat, BarChart3, CreditCard } from 'lucide-react';

const WorkflowNode = ({ data }: { data: any }) => {
  const IconComponent = data.icon;
  
  return (
    <div className="workflow-node bg-white rounded-xl p-6 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[280px]">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {data.step}
        </div>
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{data.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
    </div>
  );
};

const nodeTypes = {
  workflow: WorkflowNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'workflow',
    position: { x: 0, y: 0 },
    data: {
      step: '01',
      icon: UserCheck,
      title: 'Employee Login',
      description: 'Employees log in via MealPe app or RFID card for quick access to the cafeteria system'
    },
  },
  {
    id: '2',
    type: 'workflow',
    position: { x: 400, y: 120 },
    data: {
      step: '02',
      icon: ShoppingCart,
      title: 'Browse & Order',
      description: 'Browse menus and place pre-orders or on-site orders with dietary preferences and filters'
    },
  },
  {
    id: '3',
    type: 'workflow',
    position: { x: 0, y: 240 },
    data: {
      step: '03',
      icon: ChefHat,
      title: 'Vendor Processing',
      description: 'Orders are routed to vendors via the Vendor Admin App for efficient preparation and cooking'
    },
  },
  {
    id: '4',
    type: 'workflow',
    position: { x: 400, y: 360 },
    data: {
      step: '04',
      icon: BarChart3,
      title: 'Real-time Monitoring',
      description: 'Admins track analytics and monitor inventory in real-time for optimal cafeteria management'
    },
  },
  {
    id: '5',
    type: 'workflow',
    position: { x: 0, y: 480 },
    data: {
      step: '05',
      icon: CreditCard,
      title: 'Seamless Payment',
      description: 'Payments are processed seamlessly through integrated cashless systems and digital wallets'
    },
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--primary))',
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--primary))',
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--primary))',
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--primary))',
    },
  },
];

export const MealPeWorkflowFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => [...eds]),
    [setEdges],
  );

  return (
    <div className="h-[600px] w-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        panOnDrag={false}
        attributionPosition="bottom-left"
        style={{ background: 'transparent' }}
      >
        <Background 
          color="hsl(var(--primary) / 0.1)" 
          size={2} 
          style={{ backgroundColor: 'transparent' }} 
        />
      </ReactFlow>
    </div>
  );
};