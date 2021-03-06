import { findByText, render } from "@testing-library/react"
import App from "./App"


test('should do nothing', async () => {
    const {findByText} = render(<App />);
    const title = await findByText("Main App");
    expect(title).toBeInTheDocument();
})
