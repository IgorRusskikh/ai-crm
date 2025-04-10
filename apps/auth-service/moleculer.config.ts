export default {
  namespace: process.env.MOLECULER_NAMESPACE,
  nodeID: process.env.MOLECULER_NODE_ID,
  transporter: process.env.MOLECULER_TRANSPORTER,
  logger: true,
  logLevel: 'info',
} as const;
