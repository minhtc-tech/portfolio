interface MenuIconProps {
  hoverClasses: string
}

const MenuIcon = ({ hoverClasses }: MenuIconProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={`fill-primary-600 ${hoverClasses}`}
        d='M0 3.42858C0 2.48037 0.766071 1.71429 1.71429 1.71429H22.2857C23.2339 1.71429 24 2.48037 24 3.42858C24 4.37679 23.2339 5.14287 22.2857 5.14287H1.71429C0.766071 5.14287 0 4.37679 0 3.42858ZM0 12C0 11.0518 0.766071 10.2857 1.71429 10.2857H22.2857C23.2339 10.2857 24 11.0518 24 12C24 12.9482 23.2339 13.7143 22.2857 13.7143H1.71429C0.766071 13.7143 0 12.9482 0 12ZM24 20.5714C24 21.5197 23.2339 22.2857 22.2857 22.2857H1.71429C0.766071 22.2857 0 21.5197 0 20.5714C0 19.6232 0.766071 18.8572 1.71429 18.8572H22.2857C23.2339 18.8572 24 19.6232 24 20.5714Z'
      />
    </svg>
  )
}

export default MenuIcon