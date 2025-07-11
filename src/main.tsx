
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Verificação de segurança para garantir que o elemento root existe
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Adicionar tratamento de erro para capturar problemas no carregamento
try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Erro ao carregar a aplicação:", error);
  // Criar um elemento de fallback em caso de erro
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Erro no carregamento</h1>
      <p>Ocorreu um erro ao carregar a aplicação. Tente recarregar a página.</p>
      <details style="margin-top: 20px; text-align: left;">
        <summary>Detalhes do erro</summary>
        <pre style="background: #f5f5f5; padding: 10px; margin-top: 10px; border-radius: 4px;">${error}</pre>
      </details>
    </div>
  `;
}
