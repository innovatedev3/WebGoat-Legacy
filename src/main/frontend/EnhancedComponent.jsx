import ResponsiveContainer from './ResponsiveContainer';

const EnhancedComponent = () => {
    return (
        <ResponsiveContainer>
            <header>
                <h1>Accessible and Responsive UI</h1>
            </header>
            <main>
                <p>This is an example of a responsive and accessible component.</p>
                <button aria-label="Click to perform action">Click Me</button>
            </main>
        </ResponsiveContainer>
    );
};

export default EnhancedComponent;