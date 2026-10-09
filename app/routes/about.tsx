import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "О проекте — Remix SSR" }];
}

export default function About() {
  return (
    <>
      <h1>О проекте</h1>
      <p>
        Базовое приложение на{" "}
        <a href="https://remix.run" target="_blank" rel="noopener noreferrer">
          Remix
        </a>{" "}
        (React Router в режиме фреймворка) с серверным рендерингом. Маршруты
        описаны в <code>app/routes.ts</code>, а собранное приложение запускает{" "}
        <code>react-router-serve</code>.
      </p>
    </>
  );
}
