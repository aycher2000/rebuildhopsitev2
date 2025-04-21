# InfoCard Implementation Guide

## Core Requirements

1. **Basic HTML Structure**
```html
<details>
  <summary>Title</summary>
  <div>Content</div>
</details>
```

2. **React Component Structure**
```tsx
interface InfoCardProps {
  id: string;
  title: string;
  content: {
    short: string;
    full: React.ReactNode;
  };
}

const InfoCard = ({ id, title, content }: InfoCardProps) => {
  return (
    <details id={id}>
      <summary>{title}</summary>
      <div>{content.full}</div>
    </details>
  );
};
```

## Implementation Steps

1. **Create Component File**
   - Location: `src/components/ui/InfoCard.tsx`
   - Basic TypeScript setup
   - Export component

2. **Core Functionality**
   - Use native HTML5 `<details>` and `<summary>` elements
   - Single `<summary>` element for toggle
   - Content wrapped in `<div>`

3. **Usage Example**
```tsx
// In any page component
import InfoCard from '@/components/ui/InfoCard';

const MyPage = () => {
  return (
    <InfoCard
      id="my-section"
      title="Section Title"
      content={{
        short: "Preview text",
        full: (
          <div>
            <p>Full content here</p>
          </div>
        )
      }}
    />
  );
};
```

## Key Technical Points

1. **Native HTML5 Behavior**
   - `<details>` element handles open/close state
   - `<summary>` element acts as toggle
   - No JavaScript needed for basic functionality

2. **Accessibility**
   - Native keyboard navigation support
   - Screen reader friendly
   - ARIA attributes handled by browser

3. **State Management**
   - Browser handles open/close state
   - No React state needed
   - No useEffect or useRef required

## Testing Checklist

1. **Basic Functionality**
   - Click summary toggles content
   - Keyboard navigation works
   - Screen readers announce state

2. **Content Display**
   - Content shows/hides properly
   - No layout shifts
   - Proper spacing maintained

3. **Browser Compatibility**
   - Works in modern browsers
   - Graceful degradation in older browsers
   - Mobile touch support

## Integration Steps

1. **Add to Project**
   - Create `src/components/ui/InfoCard.tsx`
   - Copy core component code
   - Add to git

2. **Import and Use**
   - Import in target page
   - Add component with props
   - Test functionality

3. **Verify**
   - Check console for errors
   - Test in multiple browsers
   - Verify accessibility

## Troubleshooting

1. **Common Issues**
   - Multiple summary elements (avoid)
   - Nested details elements (avoid)
   - CSS conflicts (check specificity)

2. **Debug Steps**
   - Check console for errors
   - Verify HTML structure
   - Test without CSS

3. **Fallback Options**
   - Use single summary element
   - Keep content structure simple
   - Avoid complex nesting 