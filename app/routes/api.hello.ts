/* Ресурсный маршрут: без компонента, отдаёт ответ из loader */
export function loader() {
  return Response.json({
    message: "Привет с API Remix (выполняется на сервере)",
    at: new Date().toISOString(),
  });
}
