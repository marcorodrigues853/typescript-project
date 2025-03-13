interface ISpacer {
    size?: string;
    bgColor?: string;
}
function Spacer({ size = '40px', bgColor = 'transparent' }: ISpacer) {
    return (
        <div
            style={{
                paddingTop: size,
                paddingBottom: size,
                backgroundColor: bgColor,
            }}></div>
    );
}

export default Spacer;
