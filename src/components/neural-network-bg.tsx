import { useEffect, useRef } from 'react';

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    connections: number[];
}

const NeuralNetworkBg = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const nodesRef = useRef<Node[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize nodes
        const nodeCount = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 25000));
        nodesRef.current = [];

        for (let i = 0; i < nodeCount; i++) {
            nodesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                connections: [],
            });
        }

        const connectionDistance = 200;
        const primaryColor = { r: 100, g: 255, b: 218 }; // #64ffda

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 25, 47, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            nodesRef.current.forEach((node, i) => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Keep in bounds
                node.x = Math.max(0, Math.min(canvas.width, node.x));
                node.y = Math.max(0, Math.min(canvas.height, node.y));

                // Find connections
                node.connections = [];
                nodesRef.current.forEach((otherNode, j) => {
                    if (i !== j) {
                        const dx = node.x - otherNode.x;
                        const dy = node.y - otherNode.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < connectionDistance) {
                            node.connections.push(j);
                        }
                    }
                });
            });

            // Draw connections
            nodesRef.current.forEach((node, i) => {
                node.connections.forEach((j) => {
                    if (j > i) {
                        const otherNode = nodesRef.current[j];
                        const dx = node.x - otherNode.x;
                        const dy = node.y - otherNode.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const opacity = (1 - distance / connectionDistance) * 0.3;

                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            // Draw nodes
            nodesRef.current.forEach((node) => {
                // Glow effect
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.radius * 4
                );
                gradient.addColorStop(0, `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.8)`);
                gradient.addColorStop(0.5, `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.2)`);
                gradient.addColorStop(1, 'rgba(100, 255, 218, 0)');

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Core node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.9)`;
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        // Initial clear
        ctx.fillStyle = '#0a192f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ background: '#0a192f' }}
        />
    );
};

export default NeuralNetworkBg;
