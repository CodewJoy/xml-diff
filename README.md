# XML Diff Viewer

一個簡潔直覺的 XML 差異比對元件，使用 React + TypeScript + Vite 打造，適合整合至你的前端應用中。

## 🔧 技術棧

- React
- TypeScript
- Vite
- styled-components
- [diff](https://www.npmjs.com/package/diff)

## ✨ 功能特色

- ✅ **行級比對**：保留 XML 結構與原始格式
- ✅ **新增內容**：以綠色背景顯示
- ✅ **刪除內容**：以紅色背景與刪除線顯示
- ✅ **效能優化**：使用 `React.useMemo` 減少重複運算
- ✅ **樣式模組化**：使用 `styled-components` 撰寫樣式，方便維護與擴充

## 🔮 未來可擴充功能（建議）

- [ ] 折疊未變更區塊
- [ ] 支援字元層級差異（`diffWordsWithSpace`）
- [ ] 顯示行號
- [ ] XML 語法高亮
- [ ] 差異結果匯出或複製
