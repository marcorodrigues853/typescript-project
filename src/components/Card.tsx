import { ReactNode } from 'react';

type CardProps = {
    // children: ReactElement;
    children: ReactNode;
    corDoFundo: COLORS;
};
function Card({ children, corDoFundo = 'white' }: CardProps) {
    return (
        <div className={`card`} style={{ backgroundColor: corDoFundo }}>
            {children}
        </div>
    );
}

export default Card;

type COLORS = 'white' | 'gray' | 'blue' | 'green' | 'royalblue';
// interface ISuperCard {
//     corTitulo: COLORS;
//     corBody: COLORS;
//     CorFooter: COLORS;
//     bgColor: COLORS;
//     titulo: string;
//     footerMessage: string;
//     children: ReactElement;
// }

// export function SuperCard({
//     corTitulo,
//     corBody,
//     CorFooter,
//     bgColor,
//     titulo,
//     footerMessage,
//     children,
// }: ISuperCard) {
//     return (
//         <div className={`card`}>
//             <div className="card-title" style={{ background: corTitulo }}>
//                 {titulo}
//             </div>
//             <div className="card-body" style={{ background: bgColor }}>
//                 {children}
//             </div>
//             <div className="card-footer" style={{ background: 'gray' }}>
//                 {footerMessage}
//             </div>
//         </div>
//     );
// }
