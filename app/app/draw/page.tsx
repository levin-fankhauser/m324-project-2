'use client';
import { Tldraw } from 'tldraw'
import './draw.module.css';

export default function Draw() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw />
		</div>
	)
}

export {Draw};
