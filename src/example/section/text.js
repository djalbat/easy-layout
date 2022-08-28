"use strict";

import withStyle from "easy-with-style";  ///

const TextSection = (properties) => {
  const { className } = properties;

  return (

    <section className={`${className} text`}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum mauris vitae sem ultrices commodo. Pellentesque dui justo, fermentum quis vestibulum id, molestie vel leo. Maecenas vel consequat sem. Sed a maximus enim. Aenean quis mi sit amet quam sodales consequat. Aliquam justo arcu, lacinia et ultrices sit amet, rutrum id nisi. Suspendisse nec consectetur ante, sed hendrerit augue. Morbi viverra metus id turpis porttitor pellentesque. Donec pretium ex eget urna molestie, eget semper lacus dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pharetra nunc ac mauris tristique sagittis.
      </p>
      <p>
        Curabitur blandit interdum dolor sed ultrices. Nunc pellentesque aliquet maximus. Suspendisse pellentesque dapibus accumsan. Sed at ipsum eget dolor consectetur vehicula. Quisque ornare eros id tincidunt interdum. Sed pulvinar, turpis sodales volutpat gravida, purus magna hendrerit purus, nec maximus arcu dui ac nisl. Quisque ac pellentesque risus.
      </p>
      <p>
        Nulla ut justo ut nunc eleifend ultricies volutpat vel ex. Fusce quis velit lacus. Proin sagittis semper erat. Duis ut magna eget justo vulputate facilisis. Phasellus ultrices eleifend justo, ut faucibus lectus rutrum id. In pretium porta faucibus. Praesent vehicula ornare justo, sed mattis risus cursus at.
      </p>
      <p>
        Fusce at bibendum nunc, eleifend consectetur sem. Fusce at elit augue. Sed lectus odio, pulvinar sed pharetra et, pharetra sed dolor. Morbi sodales sem odio, a venenatis odio commodo aliquam. Cras id volutpat metus, a maximus orci. Nullam ac rhoncus lorem. Nam scelerisque risus et elit egestas elementum. Fusce nec arcu at enim porttitor aliquam vel vitae est. Maecenas gravida, quam iaculis pellentesque vehicula, risus diam interdum nunc, vitae lobortis elit ante vitae turpis. Nam viverra, felis et faucibus luctus, ex sapien egestas lectus, vestibulum pulvinar turpis risus et nisi. Sed vitae suscipit libero, eu ultricies metus. Proin nibh arcu, blandit in sem vel, scelerisque vulputate arcu. Duis ultrices orci felis, maximus vulputate neque rutrum sit amet.
      </p>
      <p>
        Ut lectus lacus, tempor ut pharetra eget, tempus eget dui. Nunc purus nisl, malesuada vel malesuada a, faucibus in dolor. Integer dictum lobortis est sed maximus. Aliquam ut lorem elementum velit consectetur commodo. Cras et est quis augue pellentesque iaculis. In tincidunt, arcu lobortis hendrerit ultricies, turpis orci vestibulum lacus, id dapibus sapien nibh vel urna. Nam blandit tellus id massa semper pharetra.
      </p>
    </section>

  );
};

export default withStyle(TextSection)`

  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  
`;
