import './styles.css';

const ResponsiveContainer = ({ children }) => {
    return (
        <div className="responsive-container">
            {children}
        </div>
    );
};

export default ResponsiveContainer;