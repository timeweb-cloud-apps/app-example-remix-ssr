import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Remix SSR" }];
}

/* loader выполняется только на сервере, в браузер уходит его результат */
export function loader({ request }: Route.LoaderArgs) {
  return {
    renderedAt: new Date().toISOString(),
    nodeVersion: process.version,
    userAgent: request.headers.get("user-agent") ?? "—",
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>Главная</h1>
      <p className="lead">
        Эта страница рендерится на сервере (SSR) при каждом запросе.
      </p>

      <dl className="info">
        <dt>Время рендера</dt>
        <dd>
          <code>{loaderData.renderedAt}</code>
        </dd>
        <dt>Node.js</dt>
        <dd>
          <code>{loaderData.nodeVersion}</code>
        </dd>
        <dt>User-Agent</dt>
        <dd>
          <code>{loaderData.userAgent}</code>
        </dd>
      </dl>

      <p>
        Обновите страницу — время рендера изменится. Пример API-эндпоинта:{" "}
        <a href="/api/hello">/api/hello</a>.
      </p>
    </>
  );
}
