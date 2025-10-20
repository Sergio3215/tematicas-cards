import Card from "@/Componentes/Layout/Card";
import { Suspense } from "react";


export default function PageCard() {

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Card />
    </Suspense>
  )
}