# K-Editor 프로젝트 소개글

K-Editor는 tinymce 오픈소스를 커스텀하여 KBDS에서 사용할 목적으로 개발한 에디터입니다.

Tinymce 라이브러리를 self-hosting 하는 방식으로 개발 하였습니다.


> https://www.tiny.cloud/

## 파일 구조

```shell
.
├── LICENSE
├── README.md
├── index.html
├── package.json
├── public
│   ├── CUSTOM
│   ├── langs
│   ├── skins
│   ├── tinymce
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── index.css
│   └── main.tsx
├── tsconfig.json
├── vite.config.ts
├── vite.config.ts.timestamp-1721177224532-e4dfd7945eb6f.mjs
├── vite.config.ts.timestamp-1721183059247-7e135e83164ce.mjs
└── yarn.lock
```
## 버전 및 환경 정보

* node: node 버전은 v18.+ 를 권장합니다.
* yarn: 1.22.22
* tinymce: 5.1.1
* react: 18.3.3
* typescript: 5.5.3
* vite: 5.3.1

각 주요 라이브러리의 버전은 위와 같습니다.

빌드 최적화를 위해 `vite`를 사용했습니다.

## 설치 및  실행 방법

### 필요 라이브러리 설치

```shell
$ yarn .
```

### 실행
```shell
$ yarn dev
```




