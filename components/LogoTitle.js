import { colors, fontWeight } from 'styles/theme';
import Logo from './ui/icons/Logo';

export default function LogoTitle() {
  return (
    <div className="title-container">
      <Logo size={40} />
      <h1 className="title">Podcasts App</h1>

      <style jsx>{`
        .title {
          color: ${colors.black};
          font-weight: ${fontWeight.bold};
        }
      `}</style>

      <style jsx>{`
        .title-container {
          display: flex;
          align-items: center;
          margin: 3em 0 2rem;
          height: auto;
        }
        .title {
          font-size: 2rem;
          margin: 0 0 -5px 1rem;
        }
      `}</style>
    </div>
  );
}
