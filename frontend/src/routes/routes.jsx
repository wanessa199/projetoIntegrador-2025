import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

// Páginas públicas
import Login from '../pages/Login';

// Layout interno
import LayoutInterno from '../components/LayoutInterno';

// Páginas do dashboard
import Dashboard from '../pages/Dashboard';
import Noticias from '../pages/Noticias';
import Mapa from '../pages/Mapa';
import CanaisApoio from '../pages/CanaisApoio';
import Projetos from '../pages/Projetos';
import Contato from '../pages/Contato';
import EducacaoAmbiental from '../pages/EducacaoAmbiental';
import AtuacaoNacional from '../pages/AtuacaoNacional';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas com LayoutInterno */}
      <Route
        element={
          <ProtectedRoute>
            <LayoutInterno />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/noticias" element={<Noticias />} />
        <Route path="/dashboard/mapa" element={<Mapa />} />
        <Route path="/dashboard/canais-apoio" element={<CanaisApoio />} />
        <Route path="/dashboard/projetos" element={<Projetos />} />
        <Route path="/dashboard/contato" element={<Contato />} />
        <Route path="/dashboard/educacao-ambiental" element={<EducacaoAmbiental />} />
        <Route path="/dashboard/atuacao-nacional" element={<AtuacaoNacional />} />
      </Route>

      {/* Redirecionamentos */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};