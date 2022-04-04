module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        // roda o react automaticamente nos elementos sem precisar importar
        runtime: 'automatic'
      }
    ]
  ]
}
