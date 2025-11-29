// @ts-check
const NOTIFICATION_ELEMENT_ID = 'webhighlights-notifications';

function getNotificationElement() {
  const element = document.querySelectorAll(
    `[id^="${NOTIFICATION_ELEMENT_ID}"]`,
  )[0];
  if (!element) {
    const element = document.createElement('div');
    element.id = NOTIFICATION_ELEMENT_ID;
    document.body.append(element);
    return element;
  }
  return element;
}

function dispatchWebHighlightsNotification(event, eventInitDict) {
  getNotificationElement()?.dispatchEvent(
    new CustomEvent(event, eventInitDict),
  );
}
