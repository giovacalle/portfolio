const Scrollbar = () => (
  <style jsx global>{`
    html {
      scrollbar-color: #777 #7777;
      scrollbar-width: thin;
    }

    ::-webkit-scrollbar {
      width: 0.6rem;
      height: 0.4rem;
    }

    ::-webkit-scrollbar-track {
      background-color: #7777;
    }

    ::-webkit-scrollbar-thumb {
      background: #777;
      border-radius: 0.5rem;
    }
  `}</style>
)
export default Scrollbar;