// 설정·머리말 문장의 \n 을 화면 줄바꿈(<br>)으로 바꾼다. 나머지 글자는 HTML로 해석되지 않게 막는다.
export const nl = (text: string | null | undefined) =>
  String(text ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');

// 빈칸(""), 공백만 있는 값은 «아직 안 채움»으로 보고 화면에서 숨긴다.
export const filled = (text: string | null | undefined) => !!text && text.trim() !== '';
