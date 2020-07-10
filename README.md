# simple-component-library

A library of React components created using `create-react-app`.

## Installation

Run the following command:
`npm install simple-component-library`

1.Criando um novo projeto usando create-react-app:
create-react-app simple-component-library

2. Delete todos arquivos dentro da pasta src/. e depois crie um novo arquivo App.js com algum código inicial:
   Image for post
   Exemplo pasta src/
3. Crie uma nova pasta src/lib e coloque seus componentes React dentro dele. src/lib vai servir como a pasta raiz do módulo publicado no npm. Aqui está o código para um componente exemplo:
// src/lib/components/TextInput.js
import React from "react";
import "./TextInput.css";
const TextInput = ({
type = "text",
label,
placeholder,
value,
onChange,
helpText
}) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
    {helpText && <small className="simple-form-text">{helpText}</small>}
  </div>
);
export default TextInput;
O estilo pode ser feito inline, ou em um arquivo CSS separado:
// src/lib/components/TextInput.css
.simple-form-group {
  margin-bottom: 1rem;
}
.simple-text-label {
  display: block;
  color: red;
}
.simple-text-input {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 400;
  color: rgb(33, 37, 41);
}
.simple-form-text {
  color: #6c757d !important;
  display: block;
  margin-top: 0.25rem;
  font-size: 80%;
  font-weight: 400;
}
Por último, podemos exportar o componente do src/lib/index.js para facilitar o importe:
import TextInput from "./components/TextInput";
export { TextInput };
Opcional, você pode também escrever testes para os componentes dentro de src/lib:
//src/lib/components/TextInput.test.js
import React from "react";
import TextInput from "./TextInput";
import renderer from "react-test-renderer";
describe("TextInput", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<TextInput label="Email" placeholder="name@example.com" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
4.(Opcional) Use os componentes no src/App.js para criar exemplos para testes e debugging durante o desenvolvimento. Qualquer código colocado fora do src/lib não vai ser publicado no npm. Aqui está um exemplo usando o TextInput:
import React from "react";
import { TextInput } from "../lib";
const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
  </div>
);
export default App;
Rode o comando npm start e navegue para http://localhost:300 para visualizar o resultado:
Image for post
Funciona!
Dica: Use o react-live para criar um site de documentação editável ao vivo!
4. Instale o babel-cli usando o comando npm i babel-cli — save-dev e crie um aquivo .babelrc na raiz do seu projeto com o seguinte conteúdo:
   {
   "presets": ["react-app"]
   }
5. Altere o script build dentro do package,json com o seguinte conteúdo:
   "build": "rm -rf dist && NODE_ENV=production babel src/lib --out-dir dist --copy-files --ignore **tests**,spec.js,test.js,**snapshots**",
   O comando npm run build agora transpilará o código dentro do src/lib (ignorando os testes e snapshots) dentro da pasta dist.
6. Remova a linha “private”: true do package.json. Além disso remova o react-scripts, react e react-dom da dependencias, e coloque eles na devDependencies. Além disso você pode adicionar o react e react-dom como peerDependencies.
7. Preparando a publicação, adicione o seguinte linha de código no package.json:
   "main": "dist/index.js",
   "module": "dist/index.js",
   "files": [ "dist", "README.md" ],
   "repository": {
   "type": "git",
   "url": "URL_OF_YOUR_REPOSITORY"
   }
   Image for post
8. Remova o texto default do arquivo README.md e crie um novo texto com alguma informação sobre a biblioteca.

# simple-component-library

A library of React components created using `create-react-app`.

## Installation

Run the following command:
`npm install simple-component-library`

10. Publicando no npm!
    npm run publish
    É isso! Agora você pode instalar sua biblioteca com o comando npm install simple-component-library e usar isso em qualquer projeto criado usando o Create React App.
