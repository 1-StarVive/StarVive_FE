"use client";

import { useFunnel } from "@use-funnel/browser";
import { useState } from "react";

// 1. 아무것도 입력 안됨
type 이메일입력 = { email?: string; password?: string; other?: unknown };
// 2. 이메일은 입력됨
type 비밀번호입력 = { email: string; password?: string; other?: unknown };
// 3. 이메일과 비밀번호 입력됨
type 그외정보입력 = { email: string; password: string; other?: unknown };

function Signup() {
  const funnel = useFunnel<{
    이메일입력: 이메일입력;
    비밀번호입력: 비밀번호입력;
    그외정보입력: 그외정보입력;
  }>({
    id: "my-funnel-app",
    initial: {
      step: "이메일입력",
      context: {},
    },
  });
  return (
    <funnel.Render
      이메일입력={({ history }) => <이메일입력 onNext={(email) => history.push("비밀번호입력", { email })} />}
      비밀번호입력={({ context, history }) => (
        <비밀번호입력 email={context.email} onNext={(password) => history.push("그외정보입력", { password })} />
      )}
      그외정보입력={({ context }) => <그외정보입력 data={context} />}
    />
  );
}

export default Signup;

function 이메일입력({ onNext }: { onNext: (email: string) => void }) {
  const [email, setEmail] = useState("");
  return (
    <div>
      이메일입력 <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => onNext(email)}>다음</button>
    </div>
  );
}
function 비밀번호입력({ onNext }: { email: string; onNext: (password: string) => void }) {
  const [password, setPassword] = useState("");
  return (
    <div>
      비밀번호입력 <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => onNext(password)}>다음</button>
    </div>
  );
}
function 그외정보입력({ data }: { data: any }) {
  console.log(data);
  return <div>그외정보입력</div>;
}
