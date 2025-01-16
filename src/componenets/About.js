import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function About() {

  const userR = useSelector((state)=>state.users)
  console.log(userR)

  return (
    <div className="About">

{userR.flat().map((user) => (
        <div key={user.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Password:</strong>{user.password}</p>
          <p><strong>Active:</strong> {user.active ? "Yes" : "No"}</p>
        </div>
      ))}

        {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum non tortor quis luctus. Integer eleifend diam a arcu pellentesque molestie. Cras convallis augue at mattis semper. Nullam nec porta urna. Nullam aliquet, nunc ut auctor ultrices, leo eros feugiat sem, sed tincidunt turpis ante vitae leo. Nullam interdum neque nibh, et tincidunt dolor aliquam eget. Cras eu semper arcu, eu malesuada quam. Nunc viverra cursus congue. Praesent fringilla tempus feugiat. Sed enim ligula, varius ut elementum et, tempor eu quam. Aenean efficitur urna odio, at sollicitudin eros pulvinar id. Sed auctor eros eget accumsan dapibus. Fusce eu bibendum lorem. Proin consectetur auctor consectetur.

Quisque vel lectus in nisl consectetur fermentum quis ut augue. Donec vel massa iaculis, accumsan augue sed, porttitor lorem. Sed accumsan enim vel diam pharetra euismod. Duis tempus posuere leo id molestie. Morbi ullamcorper, metus ac accumsan gravida, eros enim maximus urna, vitae blandit ipsum lacus id magna. Integer viverra dolor nec consectetur placerat. Suspendisse sit amet odio nisi. Donec sollicitudin risus scelerisque maximus imperdiet.

Vivamus mi magna, feugiat sed tempus nec, ornare lacinia libero. Nam id orci arcu. Ut luctus sapien quis urna dapibus cursus. Nam quam lectus, ultrices nec efficitur et, posuere in diam. Praesent hendrerit orci et lacus viverra euismod. Praesent elementum ligula ex, at interdum nulla volutpat at. Duis ac mi condimentum, consequat velit volutpat, lobortis ante.

Curabitur in turpis justo. Vestibulum vitae lacus eu massa pulvinar tincidunt. Integer at porta ante. Quisque semper velit id molestie viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed egestas a dui sed laoreet. Integer aliquam varius tellus et consectetur.

Nullam tincidunt sapien non nibh viverra imperdiet. Integer blandit euismod sapien, non lobortis ex ultrices nec. Quisque tempor elit pharetra elit dignissim, ut pulvinar nibh ornare. Sed sit amet dui odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis a lectus sed gravida. Quisque fringilla bibendum facilisis. Vestibulum quis quam enim. Nullam cursus cursus dictum. Integer ac tellus eu elit bibendum egestas. Duis sed quam id ipsum consequat tristique. Duis gravida consectetur nunc, sed suscipit dui blandit at. Nunc eget tortor viverra, fermentum risus ac, sodales lorem. Morbi faucibus sagittis urna, vel maximus sem tincidunt in.

Integer mauris nisl, tristique a ligula ac, pellentesque auctor mauris. Sed id turpis in ex semper ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed iaculis, urna vitae bibendum pellentesque, ipsum massa ultricies neque, ut gravida velit ante sit amet massa. Duis ac condimentum lectus, a tincidunt lacus. Sed suscipit libero a ligula fringilla dictum. Mauris interdum quam sit amet eros mollis, ut auctor nibh rutrum. Nunc aliquam est a fermentum dictum. Suspendisse tempor facilisis orci, sed efficitur libero. Phasellus egestas, purus fringilla lobortis dictum, velit sapien iaculis nisi, ut viverra lacus libero eget justo. Aliquam lobortis sem nunc, vitae hendrerit enim feugiat eget.

Curabitur ut pretium ante. Mauris accumsan ac libero vel sodales. Integer arcu eros, fringilla ut ullamcorper rutrum, euismod eget sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus nulla. Sed ut tortor tempor, egestas lacus sed, efficitur nibh. Phasellus risus risus, finibus vel ligula non, luctus mollis quam. Proin bibendum posuere neque, id interdum lorem ornare sed. Proin lorem urna, vestibulum sit amet erat id, eleifend egestas mauris. Nulla tincidunt vestibulum ipsum, sed fermentum odio cursus vitae. Cras tincidunt molestie magna. Aliquam lacinia elit et nibh elementum venenatis. Nullam eu aliquam ex. Sed lectus sem, rutrum in gravida a, luctus cursus libero. Duis eget arcu dictum tortor faucibus ultricies.

Cras maximus, ante at imperdiet cursus, sem felis tempor nibh, at placerat diam purus sed neque. Aliquam fringilla odio ac nisi imperdiet iaculis. Vestibulum nec nunc tincidunt, condimentum ligula et, placerat magna. Suspendisse tristique eros ut justo luctus, sit amet vestibulum nunc lacinia. Phasellus sagittis porttitor egestas. Suspendisse eros nisl, consequat sed ex eu, luctus vulputate tellus. Proin ut luctus diam. Praesent nunc nisl, porta nec consectetur sed, pellentesque sed justo. Nullam dapibus cursus ipsum nec dapibus. Nam eu massa justo. Nulla sit amet volutpat arcu. Donec tristique sit amet quam sed sodales.

Fusce sit amet sapien lectus. Sed odio dui, elementum non neque sit amet, tristique molestie urna. Vivamus sagittis metus nec nisl pulvinar, sit amet lobortis erat tempus. Curabitur sit amet tempus ante. In hac habitasse platea dictumst. Sed nec accumsan metus. Vivamus eget interdum ligula. Praesent tempus leo blandit mollis efficitur. Etiam tristique libero id mollis interdum. Integer eget elit varius, pretium neque in, semper turpis. Donec pellentesque ex urna, quis posuere erat mollis quis. Nunc a dui sit amet dolor dictum tempor et eget dolor. Vestibulum sed interdum nisi, quis gravida tellus.

Vestibulum dui est, iaculis nec felis eu, viverra pretium libero. Pellentesque id blandit metus. Ut vitae sem sit amet arcu molestie vulputate. Curabitur sed libero sed mauris euismod imperdiet. In mauris eros, porttitor nec convallis interdum, volutpat vitae massa. Suspendisse eget scelerisque odio. Duis semper erat nec lorem luctus, et tincidunt elit ullamcorper. Cras nec dignissim neque. Suspendisse faucibus odio vel purus pulvinar, sed pulvinar eros sodales. Cras pharetra est id erat consectetur dapibus.

Maecenas eget ex dictum, condimentum velit sed, ultrices risus. Maecenas vehicula dolor sed consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vehicula libero ipsum, at sollicitudin mi ullamcorper varius. Fusce imperdiet cursus tempus. Maecenas vel viverra elit. Duis non pulvinar urna. Proin vitae nulla eget mauris dignissim congue. Nam sollicitudin lectus eget risus pretium, vulputate volutpat diam aliquet. In eget mi nunc. Duis egestas turpis sed velit rutrum finibus. Suspendisse potenti. Aenean a leo a tellus ultricies imperdiet id id ligula. Praesent sit amet pharetra augue, placerat dapibus libero. Vivamus fringilla placerat velit, ac scelerisque tortor.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget leo vitae elit consectetur ultrices. Cras eu diam non tortor pharetra viverra. Praesent dapibus turpis vitae eros congue, ut facilisis tellus dignissim. Cras tristique eros odio, sed dignissim ligula pretium eu. Duis in nulla sit amet leo sollicitudin ultrices sed quis justo. Vestibulum erat eros, facilisis vel posuere et, eleifend sit amet lacus. Praesent tempus mauris turpis, ac viverra sem fringilla ac.

Nunc ex dui, lacinia nec hendrerit eu, pharetra ac tellus. In egestas, lectus in tincidunt lacinia, eros sem tempor nisi, quis sodales nibh dui et mi. Maecenas sagittis sed leo in tincidunt. Sed quis velit vel sem pharetra ullamcorper vitae eu odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam commodo, mi quis egestas volutpat, magna nisi fermentum diam, a gravida urna velit non lectus. Suspendisse sollicitudin leo odio, sed lobortis mauris lacinia nec. Ut mattis tortor ipsum, vel tempor metus rutrum eleifend. Nullam ut vehicula est.

Nam maximus elementum diam, sit amet feugiat lorem. Fusce pretium venenatis enim, eu dictum risus fringilla a. Quisque vitae justo libero. Suspendisse consequat augue ac ex varius, eget faucibus purus varius. Proin semper neque lectus, sit amet gravida metus lacinia tempor. Donec lorem nisi, consectetur rutrum ornare et, sollicitudin ut libero. Pellentesque pharetra, tortor non consequat venenatis, mi ante auctor quam, ut laoreet sapien dolor nec est. Nam at neque at metus consequat blandit vel id lorem. Suspendisse accumsan ac risus ac fringilla. Aenean eu condimentum neque. Nulla a leo in felis euismod cursus. Nam venenatis massa a faucibus condimentum. Aenean ex libero, congue eu nisi in, maximus laoreet lacus. Maecenas varius maximus lectus ut placerat. Nullam ipsum eros, maximus sed libero ut, dapibus dapibus urna.

Etiam aliquet vulputate lectus, id posuere neque auctor eget. Praesent sapien odio, dapibus tincidunt libero in, vehicula porta eros. Nunc pellentesque eros tellus, a gravida massa laoreet a. Suspendisse quam est, blandit non nulla vitae, facilisis rhoncus ante. Sed vehicula lacus non dui commodo, sit amet convallis elit pellentesque. Proin vestibulum eros in sapien sollicitudin facilisis. Ut sit amet fringilla felis. Curabitur mi elit, convallis sit amet dui quis, vehicula dictum odio. Integer vel purus neque. Nulla at odio non quam venenatis dictum. In ut tortor vehicula, ultricies sapien vel, cursus tortor. Integer a nulla sed ipsum consectetur sollicitudin at in leo.

Ut non lacinia elit, at sollicitudin massa. Integer aliquam, erat quis ultrices maximus, sapien diam euismod felis, in semper eros mauris sed purus. Sed malesuada condimentum leo. Curabitur dignissim consectetur scelerisque. Nullam et rutrum lacus, quis imperdiet ligula. Praesent id facilisis mi, quis rutrum dui. Fusce vulputate sapien id dolor convallis pretium. In vel iaculis sem. Nunc quis mi quis dolor aliquet iaculis. Aliquam scelerisque ex vitae nisi tempus molestie. Cras venenatis erat sit amet quam mollis, quis fringilla risus efficitur.

Nunc convallis velit nec ante egestas mollis. Praesent in elit lectus. Morbi elit ipsum, luctus at est a, interdum consequat purus. Sed eu convallis neque, in suscipit est. Pellentesque finibus hendrerit maximus. Integer ac eleifend nisi. Mauris pretium ultricies magna a bibendum. Pellentesque ullamcorper eros sed nibh ullamcorper finibus in ac nunc. Cras volutpat dui dapibus, tincidunt ipsum luctus, egestas ex.

Phasellus ac fermentum diam, in iaculis justo. Sed non nisl eget risus placerat ultrices at pulvinar turpis. Donec consequat convallis luctus. In sagittis elit sem, nec dignissim nunc vestibulum eu. In dictum massa vitae felis tristique mollis. In id turpis massa. Proin accumsan magna et orci feugiat mattis bibendum vel dui. Vestibulum cursus cursus mi, sit amet hendrerit urna. Suspendisse lobortis turpis magna, et dapibus turpis commodo a. Ut nec faucibus erat. Integer dolor sapien, feugiat eget scelerisque ut, egestas sed nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer faucibus facilisis mauris ac fermentum. In consequat sem quis ipsum posuere, faucibus semper ligula accumsan. Maecenas rutrum eu lacus non facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Pellentesque et urna vel diam posuere fermentum. Nullam dictum ex ultrices arcu auctor tincidunt. Nulla orci justo, condimentum eget leo non, placerat facilisis dolor. Vestibulum sollicitudin diam ac pulvinar placerat. Duis suscipit tempor consequat. Pellentesque finibus suscipit augue a vulputate. Sed eleifend lacus eget nibh auctor, nec vehicula nulla vehicula. Etiam consequat nunc justo, interdum gravida metus tempor eget. Duis consequat, lacus eget dictum luctus, nunc dolor sagittis justo, sit amet sodales diam nunc at urna. Phasellus convallis mi non congue ullamcorper. Morbi dolor libero, gravida eget posuere et, facilisis ac purus. Pellentesque volutpat lacus in auctor placerat.

Phasellus quam diam, tempor nec pulvinar vitae, dapibus a ipsum. Curabitur iaculis quam vel ex finibus, vulputate vestibulum nunc hendrerit. Sed ac ullamcorper metus. Duis ornare tempor leo, quis luctus quam hendrerit ac. Pellentesque bibendum erat nulla, non euismod ipsum consequat et. Cras id blandit massa, ut egestas lectus. Nullam aliquet ante a erat malesuada pretium. Duis euismod hendrerit dui vitae lacinia. Morbi pretium ligula sit amet nunc imperdiet, sit amet viverra purus rutrum. Vivamus lectus sem, scelerisque id tincidunt nec, laoreet dapibus sem. Phasellus posuere tortor risus, ac hendrerit urna vestibulum sed.
        </p> */}

      
    </div>
  );
}

export default About;


