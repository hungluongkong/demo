import * as React from 'react';
import ThemeContext from '../../Theme';

const LoadingPage: React.FC = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <div
            className='flex items-center justify-center w-full h-dvh'
            style={{ background: theme.background }}>
            <div className=''>
                <div
                    className='icon'
                    style={{
                        width: '100px',
                        height: '100px'
                    }}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 84 84'>
                        <g fill='none' stroke='#000' strokeWidth='2'>
                            <path d='M42 2a20 20 0 0 1 20 20v40a20 20 0 0 1-40 0V22a20 20 0 0 1 20-20z' />
                            <path d='M22 62v20h40V62' />
                        </g>
                        <g fill='#000'>
                            <circle cx='42' cy='42' r='2'>
                                <animate
                                    attributeName='r'
                                    from='2'
                                    to='2'
                                    begin='0s'
                                    dur='1s'
                                    values='2; 3; 2'
                                    repeatCount='indefinite'
                                />
                            </circle>
                            <circle cx='34' cy='34' r='2'>
                                <animate
                                    attributeName='r'
                                    from='2'
                                    to='2'
                                    begin='0.5s'
                                    dur='1s'
                                    values='2; 3; 2'
                                    repeatCount='indefinite'
                                />
                            </circle>
                            <circle cx='50' cy='50' r='2'>
                                <animate
                                    attributeName='r'
                                    from='2'
                                    to='2'
                                    begin='0.3s'
                                    dur='1s'
                                    values='2; 3; 2'
                                    repeatCount='indefinite'
                                />
                            </circle>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
